import * as React from 'react';
import {View, Text,StyleSheet} from 'react-native';

import Button from 'apsl-react-native-button';

const EditScreen = ({navigation}) =>{
    const onPress = () => {
        alert('clicked')
      }
    return (
        
        <View
            style={styles.container}
        >
              <Text style={{
                padding: 30,
                textAlign: "center",
                fontSize: 20,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#000'
            }}>
                List of our area's and plants
            </Text>

        <View style={styles.space}>
          <Button style={styles.buttonStyle8} textStyle={styles.textStyle8} onPress={() => navigation.navigate('Home')}>
                1. Orange
          </Button>
        </View>

        <View style={styles.space}>
          <Button style={styles.buttonStyle8}textStyle={styles.textStyle8} onPress={() => navigation.navigate('Home')}>
                2. Wheat
          </Button>
        </View>

       <View style={styles.space}>
          <Button style={styles.buttonStyle8}  textStyle={styles.textStyle8} onPress={() => navigation.navigate('Home')}>
                3. Corn crops  
          </Button>
        </View>

        <View style={styles.space}>
          <Button style={styles.buttonStyle8} textStyle={styles.textStyle8} onPress={() => navigation.navigate('Home')}>
                4. Tomate
          </Button>
        </View>
            
        
         
            


        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 5,
        bottom: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 33,
        marginRight: 33,
      },
    buttonStyle8: {
      backgroundColor: 'white',
      borderColor: '#808080',
      borderWidth: 1,
      borderRadius: 5,
    },
    textStyle8: {
      width: 12,
      marginLeft: 18,
      fontFamily: 'Nunito',
      fontWeight: '500',
      fontSize: 18,
      textAlign: 'left',
      color: '#000',
    },
    space: {
      width: 300, // or whatever size you need
      height: 68,
    },
   
  });

export default EditScreen;