import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ambassader, Job,CollegesResult,AccountandInvoice,
  Consultation,
  ForexFundTransfer,
  Ielts,
  Notification, JobCate,Login,CollegeProfile, Register,AmbesadorProfile, ResetPassword,Purpose,Detail,Registeraccount, StudentProfile, AcomedationProfile, Acomedation, VisaApplicationStatus, VisaAplication } from "../screens/index";
import routs from './../constants/routeconst'
import Bottom from "./Bottom";

const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled:true,gestureEnabled:true,headerBackTitleVisible:false}}>
        <Stack.Screen name={'Bottam'} component={Bottom} />
        <Stack.Screen name={routs.StudentProfile} component={StudentProfile} />
        <Stack.Screen name={routs.Ambassader} component={Ambassader} />
        <Stack.Screen name={routs.AmbassaderProfile} component={AmbesadorProfile} />
        <Stack.Screen name={routs.CollegeProfile} component={CollegeProfile} />
        <Stack.Screen name={routs.VisaApplicationStatus} component={VisaApplicationStatus} />
        <Stack.Screen name={routs.VisaAplication} component={VisaAplication} />
        <Stack.Screen name={routs.AcomedationProfile} component={AcomedationProfile} />
        <Stack.Screen name={routs.Acomedation} component={Acomedation} />
        <Stack.Screen name={routs.Job} component={Job} />
        <Stack.Screen name={routs.JobCate} component={JobCate} />
        <Stack.Screen name={routs.login} component={Login} />
        <Stack.Screen name={routs.detail} component={Detail} />
        <Stack.Screen name={routs.resetpass} component={ResetPassword} />
        <Stack.Screen name={routs.purpose} component={Purpose} />
        <Stack.Screen name={routs.CollegesResult} component={CollegesResult} />
        <Stack.Screen name={routs.resgister} component={Registeraccount} />

        <Stack.Screen name={routs.AccountandInvoice} component={AccountandInvoice} />
        <Stack.Screen name={routs.Consultation} component={Consultation} />
        <Stack.Screen name={routs.ForexFundTransfer} component={ForexFundTransfer} />
        <Stack.Screen name={routs.Ielts} component={Ielts} />
        <Stack.Screen name={routs.Notification} component={Notification} />
      </Stack.Navigator>
    </>
  );
};

export default Appstack;

