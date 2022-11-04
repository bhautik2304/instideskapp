import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Profile,Wishlist,Finder, CollegesResult } from "../screens/index";
import routs from './../constants/routeconst'
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View,Text } from 'react-native';
import { heightp, widthp } from '../Utils/Responsive';
const Tab = createBottomTabNavigator();

const Bottom = () => {
    return (
        <Tab.Navigator   screenOptions={{ headerShown: false,tabBarActiveTintColor:'#000',tabBarInactiveTintColor:'gray',tabBarHideOnKeyboard:true,tabBarStyle:{height:60,paddingBottom:10}}}>
            <Tab.Screen 
            options={{tabBarLabel:({focused})=> focused?  <Text style={{fontSize:widthp('3%'),color:focused ? '#000' : 'gray'}}>{routs.home}</Text> : <></>,
                tabBarIcon:({focused})=>
            <>
            {focused ? <View style={{justifyContent:'center',alignItems:'center', borderColor:'#e32636',borderTopWidth:2,borderRadius:1, width: "100%", height: "100%",}}>
            <FontAwesome5 name={'home'} size={25} color={'#000'} />
            </View> : <FontAwesome5 name={'home'} size={20} color={'gray'} />}
            </>, 
            }} 
            name={routs.home} 
            component={Home} />
            <Tab.Screen name={routs.CollegesResult} 
            options={{tabBarLabel:({focused})=> focused?  <Text style={{fontSize:widthp('3%'),color:focused ? '#000' : 'gray'}}>{routs.CollegesResult}</Text> : <></>,tabBarIcon:({focused})=>
            <>
            {focused ? <View style={{justifyContent:'center',alignItems:'center', borderColor:'#e32636',borderTopWidth:2,borderRadius:1, width: "100%", height: "100%",}}>
            <FontAwesome5 name={'school'} size={20} color={'#000'} />
            </View> : <FontAwesome5 name={'school'} size={20} color={'gray'} />}
            </>,
            }}
            
            component={CollegesResult} />
            <Tab.Screen name={routs.finer} options={{tabBarLabel:({focused})=> focused?  <Text style={{fontSize:widthp('3%'),color:focused ? '#000' : 'gray'}}>{routs.home}</Text> : <></>,tabBarIcon:({focused})=>
            <>
            {focused ? <View style={{justifyContent:'center',alignItems:'center', borderColor:'#e32636',borderTopWidth:2,borderRadius:1, width: "100%", height: "100%",}}>
            <FontAwesome5 name={'book'} size={20} color={'#000'} />
            </View> : <FontAwesome5 name={'book'} size={20} color={'gray'} />}
            </>
            }} component={Finder} />
            <Tab.Screen name={routs.profile} options={{tabBarLabel:({focused})=> focused?  <Text style={{fontSize:widthp('3%'),color:focused ? '#000' : 'gray'}}>{routs.profile}</Text> : <></>,tabBarIcon:({focused})=>
            <>
            {focused ? <View style={{justifyContent:'center',alignItems:'center', borderColor:'#e32636',borderTopWidth:2,borderRadius:1, width: "100%", height: "100%",}}>
            <FontAwesome5 name={'bars'} size={20} color={'#000'} />
            </View> : <FontAwesome5 name={'bars'} size={20} color={'gray'} />}
            </>
            }} component={Profile} />
        </Tab.Navigator>
    );
}

// const styles = StyleSheet.create({})

export default Bottom;
