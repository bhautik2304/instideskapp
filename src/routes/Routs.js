import React,{useState,AsyncStorage} from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector,useDispatch } from "react-redux";
import {Login, Register, ResetPassword} from '../screens/index';
import routs from './../constants/routeconst'
import Authstack from "./Authstack";
import Appstack from "./Appstack";
import {authUsers} from '../Redux/Slice/authslice';

const Stack = createNativeStackNavigator();

const Routs = () => {
  const islogin = useSelector((state) => state.authUser.authStatus)
  const dispatch = useDispatch()
  const App=()=><Stack.Screen name={'app'} component={Appstack}/>
  const Auth=()=><Stack.Screen name={'auth'} component={Authstack}/>
//   const value = AsyncStorage.getItem('auth');
//   if (value !== null) {
//     dispatch(authUsers(true))
//   }
    //   console.log(value)
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {islogin ? App() : Auth()}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default Routs;

/*
<Stack.Screen name={'auth'} component={Authstack} />
          <Stack.Screen name={'app'} component={Appstack} />
*/
