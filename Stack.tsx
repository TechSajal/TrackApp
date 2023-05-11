import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SigninScreen from "./src/Screens/SigninScreen/SigninScrren"
import SignupScreen from "./src/Screens/SignupScreen/SignupScreen";
import TrackListScreen from "./src/Screens/TrackListScreen/TrackListScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen/TrackCreateScreen";
import AccountScreen from "./src/Screens/AccountScreen/AccountScreen";
import { navigationRef } from "./RootNavigation";
import SplashScreen from "./src/Screens/SplashScreen/SplashScreen";

const stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
const Bottomnav =() =>{
    return(
        <Tab.Navigator>
             <Tab.Screen name="TrackList" options={{headerShown:false}} component={TrackListScreen} />
              <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
              <Tab.Screen name="Account" component={AccountScreen}/>
        </Tab.Navigator>
    )
}
const MyStack = () =>{
    return(
        <NavigationContainer ref={navigationRef}>
            <stack.Navigator>
                <stack.Screen
                 name="Splash"
                 options={{headerShown:false}}
                 component={SplashScreen}
                />
                <stack.Screen
                 name="Signup"
                 options={{headerShown:false}}
                 component={SignupScreen}
                />
                 <stack.Screen 
                name='Signin'
                options={{headerShown:false}}
                component={SigninScreen}
                />
                <stack.Screen
                name="home"
                component={Bottomnav}
                options={{headerShown:false}}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;