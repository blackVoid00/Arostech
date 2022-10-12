import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Header extends React.Component {
    render(){
        return(
            <View
                style={{

                    alignContent: "center",
                    alignItems: "center",

                }}
            >

                <Text style={{
                    fontFamily:'Montserrat-bold',
                    //fontWeight: 'bold',
                    fontSize: 15,
                    padding: 5,
                    color:'black'
                }
                }>
                    Today's Temperature
                </Text>
                <MaterialCommunityIcons
                    name="weather-partly-cloudy"
                    color="#a8e39a"
                    size={35}
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        padding: 5, color:'black'
                    }}
                > 20
                    <MaterialCommunityIcons
                        name="temperature-celsius"
                        // color="#a8e39a"
                        size={16}
                    />
                </Text>
            </View>
        )
    }
}
