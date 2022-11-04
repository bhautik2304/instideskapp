import React from 'react';
import {View, StyleSheet,TextInput,Dimensions} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { widthp } from '../../Utils/Responsive';

const width=Dimensions.get('window').width;

const height=Dimensions.get('window').height;

const scal=Dimensions.get('window').scale

const fs=Dimensions.get('window').fontScale


const Textinput = ({color,placeholder,password,fullwidth,style,onchang,width,...props}) => {
    return (
        <>
            <TextInput onChangeText={onchang} {...props} secureTextEntry={password ? true : false} placeholder={placeholder} placeholderTextColor={color} style={[styles.loginInput,{width:fullwidth? '100%' : width }]}/>
        </>
    );
}

const styles = StyleSheet.create({
    loginInput:{
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: widthp('4%'),
        // width: '100%',
        borderRadius: 7,
        backgroundColor: '#eaeaea',
        marginVertical: 10,
    }
})

export default Textinput;
