import React from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import Octicons from "react-native-vector-icons/Octicons";

const Authheader = ({navigation,backgroundColor}) => {
    return (
        <View style={{width:'100%',padding:10,height:50,backgroundColor:backgroundColor}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
             <Octicons name='arrow-left' size={30} color={'#424242'}/>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Authheader;
