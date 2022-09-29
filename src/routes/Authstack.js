import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Register, ResetPassword} from '../screens/index';
import routs from './../constants/routeconst'

const Stack=createNativeStackNavigator();

const Authstack = () => {
    return (
        <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routs.login} component={Login}/>
            <Stack.Screen name={routs.resgister} component={Register}/>
            <Stack.Screen name={routs.resetpass} component={ResetPassword}/>
        </Stack.Navigator>
        </>
    );
}

const styles = StyleSheet.create({})

export default Authstack;
