import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from './src/Redux/Store/store'
import { Provider ,useSelector} from 'react-redux'
import Routs from './src/routes/Routs';
import { NativeBaseProvider, Text, Box } from "native-base";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    
    <Provider store={store}>
    <NativeBaseProvider>
      <Routs/>
    </NativeBaseProvider>
    </Provider>
    </>
  );
}

/* 
<Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routs.login} component={Login} />
        <Stack.Screen name={routs.resgister} component={Register} />
        <Stack.Screen name={routs.resetpass} component={ResetPassword} />
      </Stack.Navigator>
*/