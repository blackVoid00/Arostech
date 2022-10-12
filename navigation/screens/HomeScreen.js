import React, {useState, useEffect} from 'react';
import {View, Text, Switch, Alert, FlatList, StyleSheet, ScrollView,Image,ImageBackground} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
// import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HomeScreen ({navigation}){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);
    // fetch(''{
    //
    // });


    const toggleSwitch = (value) => {
        setIsEnabled(previousState => !previousState);
        if(value == true)
        {

            //Perform any task here which you want to execute on Switch ON event.
            Alert.alert("Watering  On.");
        }
        else{

            //Perform any task here which you want to execute on Switch OFF event.
            Alert.alert("Watering Off.");
        }

    }

    useEffect(()=>{
        fetch('https://api.thingspeak.com/channels/1655829/fields/2.json?results',
            {
                method: 'GET',
                headers:
                    {
                        Accept: 'application/json',
                        'Content-Type':'application/json'
                    }
            })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])
    console.log(data)
    return (
        <View style={{

            // flex:1,
            height: '100%',
            width: '100%'
        }}>
            <View
                style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    //flex:1,
                    // height: '100%',
                    // alignItems: "center",
                    // justifyContent: "center",
                    height: '70%',
                    width: '100%',
                    backgroundColor: "#fff",
                    alignItems: "center",
                    alignContent: "center",
                    // padding:5
                }}
            >
                <View
                    style={{
                        width: "50%",
                        height: "50%",
                        // padding:5
                    }}
                >
                    {isLoading? <Text style={{
                    }}>Data reading</Text> :(

                        <ImageBackground source={require('../images/image2.jpg')} style={{
                            justifyContent: "center",
                            height:300,
                            width:300
                        }} >
                            <MaterialCommunityIcons
                                name="weather-partly-cloudy"
                                color="white"
                                size={35}
                            />
                            <Text style={{  color: "white",
                                fontSize: 42,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                            >
                                {data['feeds'][1]['field2']}
                            </Text>
                        </ImageBackground>

                    )}
                    {/*<Text style={{*/}
                    {/*}}>*/}
                    {/*    Area 1*/}
                    {/*</Text>*/}
                </View>
                <View
                    style={{
                        width: "50%",
                        height: "50%",
                        // padding:5
                    }}
                >
                    <ImageBackground source={require('../images/image1.jpg')} style={{
                        justifyContent: "center",
                        height:300,
                        width:300
                    }} />
                </View>
                <View
                    style={{
                        width: "50%",
                        height: "50%",
                        // padding:5
                    }}
                >
                    <ImageBackground source={require('../images/image3.jpg')} style={{
                        justifyContent: "center",
                        height:300,
                        width:300
                    }}  />
                </View>
                <View
                    style={{
                        width: "50%",
                        height: "50%",
                        // padding:5
                    }}
                >
                    <ImageBackground source={require('../images/image4.jpg')} style={{
                        justifyContent: "center",
                        height:300,
                        width:300
                    }}/>
                    <Text> </Text>
                </View>

            </View>
            <View
                style={{
                    // flex:2,
                    alignItems: "center",
                    // justifyContent: "center",
                    backgroundColor: "#fff",
                    width: '100%',
                    height: '30%'
                }}>

                <Text
                    style={{
                        padding: 10,
                        textAlign: "center",
                        fontSize: 22,
                        fontWeight: 'bold'
                    }}
                >
                    optimal irrigation = water saving
                </Text>
                <Text> start or stop watering</Text>

                <Switch
                    style={{
                        borderRadius: 8,
                        border: 5,
                        borderColor: "#1f570f",
                        margin: 10,
                        marginTop:5
                    }}
                    trackColor={{ false: "grey", true: "#85cb83" }}
                    thumbColor={isEnabled ? "#6f6060" : "#fff"}
                    ios_backgroundColor="#fff"
                    onValueChange={(value)=>toggleSwitch(value)}
                    value={isEnabled}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

    },
});
