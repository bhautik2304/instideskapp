import React, { useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Octicons from "react-native-vector-icons/Octicons";
import { Logo } from "../../../assets/index";
import Authheader from '../../../components/corecomponents/Authheader';
import routeconst from '../../../constants/routeconst';
import { authUsers, registerUserData } from '../../../Redux/Slice/authslice';
import { registerInquiry } from '../../../Redux/Slice/rgisterSlice'
import { s, vs, ms, mvs } from 'react-native-size-matters';


const Registeraccount = ({ navigation, route }) => {
    const [coaching1, setcoaching1] = useState('')
    const [study_interest, setstudy_interest] = useState('')
    const [education_level, seteducation_level] = useState('')
    const [education_stream, seteducation_stream] = useState('')
    const [education_year, seteducation_year] = useState('')
    const [education_result, seteducation_result] = useState('')
    const [institute, setinstitute] = useState('')
    const [course, setcourse] = useState('')
    const dispatch = useDispatch()
    const registerdata = useSelector((state) => state.register)
    const register = () => {
        const data = {
                coaching1: coaching1,
                study_interest: study_interest,
                education_level: education_level,
                education_stream: education_stream,
                education_year: education_year,
                education_result: education_result,
                institute: institute,
                course: course
        }
        dispatch(registerInquiry(data))
        const url = "http://192.168.29.106:8000/api/inquiryRegister"
        axios.post(url, registerdata.rgister).then((e) => {
            console.log(e.data)
            // dispatch(registerUserData(e.data.data))
            // navigation.navigate(routeconst.home)
        })
    }
    return (
        <>
            <StatusBar backgroundColor={'#fff'} />
            <Authheader navigation={navigation} backgroundColor={'#fff'} />
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <View style={[styles.logo, { marginTop: 0 }]}>
                    <Logo size={'100%'} />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.scrollview}>
                        <Text style={styles.loginheading}>Your Qualification</Text>
                        <TextInput onChangeText={(e) => setcoaching1(e)} placeholder='Cource ' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TextInput onChangeText={(e) => setstudy_interest(e)} placeholder='Study Intrest' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TextInput onChangeText={(e) => seteducation_level(e)} placeholder='Study Level' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TextInput onChangeText={(e) => seteducation_stream(e)} placeholder='Your Stream' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TextInput onChangeText={(e) => seteducation_year(e)} placeholder='Pass Out Year' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TextInput onChangeText={(e) => seteducation_result(e)} placeholder='Result' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TextInput onChangeText={(e) => setinstitute(e)} placeholder='Institute' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TextInput onChangeText={(e) => setcourse(e)} placeholder='Your Cource' placeholderTextColor={'black'} style={styles.loginInput} />
                        <TouchableOpacity style={styles.btn} onPress={register}>
                            <View>
                                <Text style={[styles.btntext, { color: '#fff' }]}>Submit Inquire</Text>
                            </View>
                        </TouchableOpacity>
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
        // marginBottom: 10,
        color: '#424242',
        fontFamily: 'Poppins-Bold',
    },
    forgetpass: {
        fontSize: 20,
        marginVertical: 10,
        color: '#424242'
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
    },
    signuptext: {
        fontSize: 20,
        color: '#0E8AC8',
        marginVertical: 20,
        fontFamily: 'Poppins-Bold'
    }
})
export default Registeraccount;
