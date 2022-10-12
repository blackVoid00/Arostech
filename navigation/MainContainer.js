import React, {useEffect, Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';

//import of screens

import HomeScreen from "./screens/HomeScreen";
import EditScreen from "./screens/EditScreen";
import ChartsScreen from "./screens/ChartsScreen";
import watArchScreen from "./screens/watArchScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from './Header';

//screen names
const homeName = "Home";
const editName = "Edit";
const chartsName = "Charts";
const watArchName = "Arch";
// const tabBarHeight = useBottomTabBarHeight();

const Tab = createBottomTabNavigator();

export default class MainContainer extends Component{
    // useEffect(){
    //     SplashScreen.hide();
    // }
    // useEffect(() => {
    //     setTimeout(() => {
    //         SplashScreen.hide();
    //     }, 2000)
    // },[])
    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    // useEffect(() => {
    //     setTimeout(() => {
    //         SplashScreen.hide();
    //     }, 2000)
    // },[])
    render (){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName = {homeName}
                    screenOptions={({ route }) => ({

                        tabBarIcon: ({ focused, color }) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === homeName) {
                                iconName = focused ? 'home' : 'home';

                            } else if (rn === editName) {
                                iconName = focused ? 'application-edit' : 'application-edit-outline';

                            } else if (rn === chartsName) {
                                iconName = focused ? 'chart-areaspline' : 'chart-areaspline';

                            }else if (rn === watArchName) {
                                iconName = focused ? 'pipe-valve' : 'pipe-valve';

                            }

                            // You can return any component that you like here!
                            return <MaterialCommunityIcons name={iconName} size={20} color={color} />;
                        },
                        tabBarStyle: {
                            position:'absolute',
                            bottom:5,
                            left:20,
                            right:20,
                            elevation:5,
                            borderRadius:15,
                            height: 60,
                            shadowColor:'#7F5DF0',
                            shadowOffset:{
                                width:0,
                                height:10,
                            },
                            shadowOpacity:0.25,
                            shadowRadius:3.5,

                        },
                        tabBarBackground: ()=>{

                        },
                        tabBarActiveTintColor: 'green',
                        tabBarInactiveTintColor: '#7f7878',
                        //tabBarInactiveBackgroundColor: 'grey',
                        //tabBarActiveBackgroundColor: '#1d7813',
                        tabBarLabelStyle: { paddingBottom: 10, fontSize: 12 },
                        tabBarIconStyle: { bottom: 0}
                    })}
                >
                    <Tab.Screen name={homeName} component={HomeScreen}
                                options={{
                                    header: ()=> {
                                        return <Header/>
                                    }
                                    // tabBarBadge: 3 ,
                                    // title: "Home Page",
                                    // headerShown: true,
                                    // headerStyle: {
                                    //     backgroundColor: "#a8e39a",
                                    //
                                    // },
                                    // headerTintColor: "#fff",
                                    // headerTitleAlign: "center",
                                }} />
                    <Tab.Screen name={editName} component={EditScreen}
                                options={{
                                    header: ()=> {
                                        return <Header/>
                                    }
                                }}
                    />
                    <Tab.Screen name={watArchName} component={watArchScreen}
                                options={{
                                    headerBackgroundContainerStyle:{
                                        alignContent: "center"
                                    },
                                    headerTitle: 'Irrigation mechanism architecture',
                                }}
                    />
                    <Tab.Screen name={chartsName} component={ChartsScreen}
                                options={{
                                    headerShown: false
                                }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }


}

