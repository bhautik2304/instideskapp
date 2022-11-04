import React from 'react';
import {View, StyleSheet,Text,Image,TextInput,TouchableOpacity, ScrollView,StatusBar} from 'react-native';
import Octicons from "react-native-vector-icons/Octicons";
import { DarkLogo } from "../../assets/index";
import {Authheader,Textinput} from '../../components';
import routeconst from '../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const Register = ({navigation}) => {
    const {navigate,goBack}=navigation
    return (
        <>
            <StatusBar backgroundColor={'#fff'} />
            <Authheader navigation={navigation} backgroundColor={'#fff'}/>
        <View style={[styles.container,{backgroundColor:'#fff'}]}>
            <View style={[styles.logo,{marginTop:0}]}>
            <Logo size={'100%'} />
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
            <View style={styles.scrollview}>
            <Text style={styles.loginheading}>Register your Self</Text>
            <Textinput fullwidth placeholder='your full Name'/>
            <Textinput fullwidth placeholder='Mobaile no...' />
            <Textinput fullwidth placeholder='email' />
            <Textinput fullwidth placeholder='whatsapp no...' />
            <Textinput fullwidth placeholder='Address' />
            <Button title={'Next'} btntxtcolor={'#fff'} color={'#0E8AC8'} fullwidth onPress={()=>navigate(routeconst.resgister)}/>
            </View>
            </ScrollView>  
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    scrollview:{
        width: 320,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginheading:{
        fontSize: 30,
        marginBottom:10,
        color:'#424242',
        fontFamily: 'Sniglet Regular 400',
    },
    forgetpass:{
        fontSize: 20,
        marginVertical: 10,
        color:'#fff'
    },
    logo:{
        height:150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginInput:{
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: 'bold',
        width: '100%',
        borderRadius: 7,
        backgroundColor: '#eaeaea',
        marginVertical: 10,
    },
    btn:{
        backgroundColor: '#0E8AC8',
        height: 50,
        fontWeight: 'bold',
        width: '100%',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    btntext:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    signuptext:{
        fontSize: 20,
        color:'#0E8AC8',
        marginVertical: 20,
    }
})

export default Register;
