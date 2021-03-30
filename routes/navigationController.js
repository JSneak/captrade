import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons';
import Temp from '../screens/temp';

import Landing from '../screens/landing'
import Login from '../screens/login'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
  
export const Navigator = () => {

    // const isSignedIn = false;

    const [isSignedIn, setIsSignedIn] = useState(false)

    const authCallback = (status) => {
        setIsSignedIn(status);
    }

    
    return (
        isSignedIn ? (
            <NavigationContainer style={styles.footer}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            if (route.name === 'Discover') {
                                return <AntDesign name="Trophy" size={36} color="black" />
                            } else if (route.name === 'Settings') {
                                return <AntDesign name="user" size={36} color="black" />
                            } else if (route.name === 'Standouts') {
                                return <AntDesign name="staro" size={36} color="black" />
                            } else if (route.name === 'Matches') {
                                return <AntDesign name="inbox" size={36} color="black" />
                            } else if (route.name === 'Likes') {
                                return <AntDesign name="hearto" size={36} color="black" />
                            }
                        },
                        })}
                    tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    style: {
                        height: 60
                    }
                    }}
                >
                    <Tab.Screen name="Home" component={Temp} />
                    <Tab.Screen name="Wallet" component={Temp} />
                    <Tab.Screen name="Actions" component={Temp} />
                    <Tab.Screen name="Prices" component={Temp} />
                    <Tab.Screen name="Settings" component={Temp} />
                </Tab.Navigator>
            </NavigationContainer>
        ) : (
            <NavigationContainer>
                <Stack.Navigator   
                    screenOptions={{
                        headerShown: false
                    }}
                 >
                    <Stack.Screen name='Landing' component={Landing}/>
                    <Stack.Screen name="Login" component={Login} onAuthChange={authCallback}/>
                    <Stack.Screen name="Sign Up" component={Temp} onAuthChange={authCallback}/>
                    <Stack.Screen name='Recover Password' component={Temp} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 100,
    }
})