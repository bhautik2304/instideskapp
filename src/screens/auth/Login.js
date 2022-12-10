import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux'
import Ionicons from "react-native-vector-icons/FontAwesome5";
import Ant from "react-native-vector-icons/AntDesign";
import { DarkLogo } from "../../assets/index";
import { Textinput, Button } from '../../components';
import routeconst from '../../constants/routeconst';
import { loginUsers, registerUserData } from '../../Redux/Slice/authslice';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { validater, Passwordvalidater, Mobailevalidater } from '../../Utils/Validaters';
const Login = ({ navigation }) => {

    // const storeData = async (value) => {
    //     try {
    //         const userData = JSON.stringify(value)
    //         await AsyncStorage.setItem('user', userData)
    //     } catch (e) {
    //         // saving error
    //         console.log(e)
    //     }
    // }

    const [mobaile, setMobaile] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(true);
    const dispatch = useDispatch()
    const validateString = { password: 'Password More 8 words' }
    const validateLenght = { validateLenght: 10 }
    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('user')
    //         console.log('user : '+value)
    //         if (value !== null) {
    //             // value previously stored
    //             dispatch(registerUserData(JSON.parse(value)))
    //             navigation.navigate(routeconst.home)
    //         }


    //     } catch (e) {
    //         // error reading value
    //     }
    // }

    // getData()
    const loginuser = () => {
        const data = {
            mobaile: mobaile,
            password: password,
        }
        const validate = Passwordvalidater(data, validateLenght, validateString)
        console.log(validate)

        axios.post('https://gocoolgroup.com/api/login.php?token=70f1063ca2ae497bb9425a852683545b&username=' + mobaile + '&password=' + password + '', data).then((e) => {
            console.log(e.data.data[0])
            if (e.data.code != "5") {
                // navigation.navigate(routeconst.detail)
                alert('Not Found')
            } else {
                // storeData(e.data.data[0])
                dispatch(registerUserData(e.data.data[0]))
                navigation.navigate(routeconst.home)
            }
        })
    }

    return (
        <>
            <StatusBar backgroundColor={'#fff'} />
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <View style={[styles.logo, { marginTop: 30 }]}>
                    <DarkLogo size={'100%'} />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.scrollview}>
                        <KeyboardAvoidingView style={{ width: '100%', alignItems: 'center' }}>

                            <Text style={styles.loginheading}>Login to your account</Text>
                            <Textinput fullwidth placeholder='Mobile Number' onchang={(e) => setMobaile(e)} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#eaeaea', height: 50, borderRadius: 7, width: '100%' }}>
                                <Textinput onchang={(e) => setPassword(e)} width={'86%'} placeholder='Password' password={eye} />
                                <TouchableOpacity onPress={() => setEye(!eye)}>
                                    <View style={{ padding: 8 }}>
                                        <Ionicons name={eye ? 'lock' : 'unlock'} size={16} color={'#000'} style={{ margin: 1 }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Button title={'Login'} btntxtcolor={'#fff'} color={'#0E8AC8'} fullwidth onPress={loginuser} />

                            <TouchableOpacity style={styles.forget} onPress={() => navigation.navigate(routeconst.resetpass)}>
                                <View>
                                    <Text style={styles.forgetpass}>Forget your password</Text>
                                </View>
                            </TouchableOpacity>

                            {/* <View>
                                <Text style={styles.signuptext}>Dont't have account ?</Text>
                            </View>
                            <Button title={'Register'} btntxtcolor={'#fff'} color={'#0E8AC8'} fullwidth onPress={() => navigation.navigate(routeconst.detail)} /> */}
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        width: 320,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginheading: {
        fontSize: 20,
        marginVertical: 30,
        color: '#424242',
        fontFamily: 'Poppins-Bold',
    },
    forgetpass: {
        fontSize: 18,
        marginVertical: 10,
        color: '#424242',
        fontFamily: 'Poppins-Regular',
    },
    logo: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginInput: {
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 14,
        width: '100%',
        borderRadius: 7,
        backgroundColor: '#eaeaea',
        marginVertical: 10,
    },
    btn: {
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
    btntext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },
    signuptext: {
        fontSize: 18,
        color: '#0E8AC8',
        marginVertical: 20,
        fontFamily: 'Poppins-Bold'
    }
})

export default Login;
