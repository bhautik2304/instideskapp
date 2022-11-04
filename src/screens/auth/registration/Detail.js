import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Octicons from "react-native-vector-icons/Octicons";
import { Logo } from "../../../assets/index";
import { Authheader, Textinput, Button } from '../../../components';
import routeconst from '../../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { registerInquiry } from '../../../Redux/Slice/rgisterSlice'
import SelectDropdown from 'react-native-select-dropdown'

const Detail = ({ navigation: { navigate, goBack } }) => {
    const [mobail, setMobail] = useState('')
    const [email, setEmail] = useState('')
    const [wmobaile, setWmobaile] = useState('')
    const [address, setAddress] = useState('')
    const [fullname, setFullname] = useState('')
    const [lastname, setlastName] = useState('')
    const [gender, setGender] = useState('')
    const disapach = useDispatch();
    const getinfo = () => {
        const data = {
            last_name: lastname,
            first_name: fullname,
            email: email,
            gender: gender,
            city: address,
            mobile_no: mobail,
            whatsapp_no: wmobaile,
        };
        disapach(registerInquiry(data))
        navigate(routeconst.purpose, { userinfo: data });
    }
    const data=['Male','Female']
    return (
        <>
            <StatusBar backgroundColor={'#fff'} />
            {/* <Authheader navigation={navigation} backgroundColor={'#fff'} /> */}
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <View style={[styles.logo, { marginTop: 0 }]}>
                    <Logo size={'100%'} />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.scrollview}>
                        <Text style={styles.loginheading}>Start Registration</Text>
                        <Textinput fullwidth onChangeText={(e) => setFullname(e)} placeholder='First Name (Student)' />
                        <Textinput fullwidth onChangeText={(e) => setlastName(e)} placeholder='Last Name (Student)' />
                        <Textinput fullwidth onChangeText={(e) => setMobail(e)} placeholder='Mobile Number' />
                        <Textinput fullwidth onChangeText={(e) => setEmail(e)} placeholder='Email Id' />
                        <Textinput fullwidth onChangeText={(e) => setWmobaile(e)} placeholder='Whatsapp Number' />
                        <Textinput fullwidth onChangeText={(e) => setAddress(e)} placeholder='City' />
                        <Text style={{margin:5}}>Select Your Gender</Text>
                        <SelectDropdown
                        searchPlaceHolder='Select Your Gender'
                            data={data}
                            onSelect={(selectedItem, index) => {
                                setGender(index)
                            }}
                            dropdownBackgroundColor='#eeee'
                            dropdownStyle={{ borderRadius: 20 }}
                            buttonTextAfterSelection={(selectedItem, i) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                console.log(selectedItem)
                                return selectedItem
                            }}
                            rowTextForSelection={(item, i) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                console.log(item)
                                return item
                            }}
                        />
                        <Text style={{margin:5}}></Text>
                        <Button onPress={getinfo} title={'Next'} fullwidth color={'#0E8AC8'} btntxtcolor={'#fff'} />
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
        marginBottom: 10,
        color: '#424242',
        fontFamily: 'Poppins-Bold',
    },
    forgetpass: {
        fontSize: 20,
        marginVertical: 10,
        color: '#fff'
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
    },
    signuptext: {
        fontSize: 20,
        color: '#0E8AC8',
        marginVertical: 20,
    }
})
export default Detail;
