import React,{useState,useEffect} from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector,useDispatch } from "react-redux";
import Authstack from "./Authstack";
import Appstack from "./Appstack";
// import { useAuth } from "../Utils/useAuth";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
const Routs = () => {
  const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('user')
        console.log('user : '+value)
        if (value) {
            // value previously stored
            dispatch(registerUserData(JSON.parse(value)))
            navigation.navigate(routeconst.home)
            return null
          }else{
          
            dispatch(registerUserData([]))
          return null 
        }
    } catch (e) {
        // error reading value
    }
  }
  useEffect(() => {
    getData()
  }, []);
  const islogin = useSelector((state) => state.authUser.authStatus)

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'app'} component={Appstack}/>
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
