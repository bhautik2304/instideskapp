import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { Logo } from "../../../assets/index";
import routeconst from '../../../constants/routeconst';
import { authUsers } from '../../../Redux/Slice/authslice';
import Authheader from '../../../components/corecomponents/Authheader';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { registerInquiry } from '../../../Redux/Slice/rgisterSlice'
import SelectDropdown from 'react-native-select-dropdown'
import { Textinput, Button } from '../../../components';

const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const Purpose = ({ navigation, route }) => {
    const disapach = useDispatch();
    const p1 = ['Student Visa', 'Visiter Visa', 'PR', 'Coaching', 'Depended Visa']
    const [purpose, setPurpose] = useState('')
    const [purposetwo, setPorposetwo] = useState('')
    const [contry, setContry] = useState('')
    const { country } = useSelector((state) => state.country)
    var cunt = []
    country.map((data, index) => {
        return cunt.push(data.country)
    })
    const next = () => {
        const data = {
            "purpose1": purpose,
            "purpose2": purposetwo,
            "country1": contry,
        }
        disapach(registerInquiry(data))
        navigation.navigate(routeconst.resgister);
    }
    console.log(contry)
    return (
        <>
            <Authheader navigation={navigation} backgroundColor={'#fff'} />
            <View style={[styles.container, { backgroundColor: '#fff' }]}>
                <View style={[styles.logo, { marginTop: 30 }]}>
                    <Logo size={'100%'} />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.scrollview}>
                        <Text style={styles.loginheading}>Study Destinations ?</Text>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ margin: 5 }}>Purpose 1</Text>
                            <Selectoption data={country} onChange={(selectedItem, index)=>setContry(selectedItem.country_id)} selectShowText={(selectedItem, i)=>country[i].country} showText={(item, i)=>country[i].country} />
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ margin: 5 }}>Purpose 2</Text>
                            <Selectoption data={country} onChange={(selectedItem, index)=>setContry(selectedItem.country_id)} selectShowText={(selectedItem, i)=>country[i].country} showText={(item, i)=>country[i].country} />
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ margin: 5 }}>Country 1</Text>
                            <Selectoption data={country} onChange={(selectedItem, index)=>setContry(selectedItem.country_id)} selectShowText={(selectedItem, i)=>country[i].country} showText={(item, i)=>country[i].country} />
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={next}>
                            <View>
                                <Text style={styles.btntext}>Next</Text>
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
        color: '#fff'
    },
    signuptext: {
        fontSize: 20,
        color: '#0E8AC8',
        marginVertical: 20,
    }
})

export default Purpose;

const Selectoption = ({data,onChange,selectShowText,showText}) => {
    return (
        <>
            <SelectDropdown
                data={data}
                onSelect={onChange}
                dropdownBackgroundColor='#eeee'
                dropdownStyle={{ borderRadius: 20 }}
                buttonTextAfterSelection={selectShowText}
                rowTextForSelection={showText}
            />
        </>
    )
}

/**
 * (selectedItem, index) => {
                    setContry(selectedItem.country_id)
                }
 */