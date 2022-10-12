import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
// import WebView from 'react-native-webview';

const ChartsScreen = ({navigation}) =>{
    // const webview = require('webview').default;
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <StatusBar style="auto" hidden={true}/>
            <Text style={{
                padding: 10,
                // textAlign: "center",
                fontSize: 30,
                fontWeight: 'bold'
            }}>
                Charts Screen
            </Text>
            <Button title="Go to Home Page"
                    onPress={() => navigation.navigate('Home')}
            />
            {/*<WebView userAgent='https://reactnative.dev/'/>*/}
        </View>
    );
};
export default ChartsScreen;
