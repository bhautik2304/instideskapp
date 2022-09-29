import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/index";
import routs from './../constants/routeconst'

const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routs.home} component={Home} />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default Appstack;
