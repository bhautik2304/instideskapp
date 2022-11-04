import React,{useState} from "react";
import { StyleSheet ,AsyncStorage} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector,useDispatch } from "react-redux";
import Authstack from "./Authstack";
import Appstack from "./Appstack";
// import { useAuth } from "../Utils/useAuth";

const Stack = createNativeStackNavigator();

const Routs = () => {
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
