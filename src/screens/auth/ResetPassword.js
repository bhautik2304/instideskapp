import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity, ScrollView,StatusBar} from 'react-native';
import { useDispatch } from 'react-redux'
import { Logo } from "../../assets/index";
import routeconst from '../../constants/routeconst';
import {authUsers} from '../../Redux/Slice/authslice';
import {Authheader,Textinput,Button} from '../../components/index';
import { s, vs, ms, mvs } from 'react-native-size-matters';


const ResetPassword = ({navigation}) => {
    return (
        <>
          <StatusBar backgroundColor={'#fff'} />
         <Authheader navigation={navigation} backgroundColor={'#fff'}/>
        <View style={[styles.container,{backgroundColor:'#fff'}]}>
            <View style={[styles.logo,{marginTop:30}]}>
            <Logo size={'100%'} color={'#000'} />
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
            <View style={styles.scrollview}>
            <Text style={styles.loginheading}>Reset Your account Password</Text>
            <Textinput fullwidth placeholder='Username' placeholderTextColor={'black'} style={styles.loginInput}/>
            <Button title={'Submit'} btntxtcolor={'#fff'} color={'#0E8AC8'} fullwidth onPress={()=>navigation.navigate(routeconst.login)}/>
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
        marginVertical: 30,
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
        backgroundColor: '#fff',
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

export default ResetPassword;
