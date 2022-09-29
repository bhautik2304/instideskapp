import React from 'react';
import {View, StyleSheet,Text,Image,TextInput,TouchableOpacity, ScrollView,StatusBar} from 'react-native';
import { Logo } from "../../assets/index";
import routeconst from '../../constants/routeconst';
const Register = () => {
    return (
        <>
            <StatusBar backgroundColor={'#000000'} />
        <View style={[styles.container,{backgroundColor:'#000000'}]}>
            <View style={[styles.logo,{marginTop:15}]}>
            <Logo size={'100%'} />
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
            <View style={styles.scrollview}>
            <Text style={styles.loginheading}>Register your Self</Text>
            <TextInput placeholder='Username' placeholderTextColor={'black'} style={styles.loginInput}/>
            <TextInput placeholder='Password' placeholderTextColor={'black'} style={styles.loginInput}/>
            
            <TouchableOpacity style={styles.btn}>
                <View>
                    <Text style={styles.btntext}>Login</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.forget} onPress={()=>alert('hello')}>
                <View>
                    <Text style={styles.forgetpass}>Forget your password</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>alert('hello')}>
                <View>
                    <Text style={styles.signuptext}>Dont't have account?signup</Text>
                </View>
            </TouchableOpacity>
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
        color:'#9CA3AF',
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
