import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, TouchableOpacity } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button, Badges } from '../../../components/index';
import { useSelector, useDispatch } from "react-redux";
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Fa from "react-native-vector-icons/FontAwesome5";
import SelectList from 'react-native-dropdown-select-list'
import CountryFlag from "react-native-country-flag";
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { widthp } from '../../../Utils/Responsive';

const VisaAplication = ({ navigation, user }) => {
    return (
        <>
            <Screen navigation={navigation} header={true}>
            {/* <Homeheader navigation={navigation} logo userinfo/> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 20, marginVertical: 30 }}>Visa Application</Text>
                    </View>
                    <View style={[styles.container, styles.homedwd]}>
                        <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <View style={{ width: '88%' }}>

                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                    <View style={{ justifyContent: 'space-evenly' }}>
                                    <Text></Text>
                                        <Text style={{ color:'#3f3f3f', fontFamily: 'Poppins-Regular',  fontSize: 16, marginBottom: 5 }}>GEORGIAN COLLEGE</Text>
                                        <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular',  fontSize: 16 }}>Canada , Barrie</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginTop:30 }}>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular',  fontSize: 16 }}>Status</Text>
                                            <View style={{ marginHorizontal: 30 }}>
                                                <>{!user ? <Badges color={"#A9EF90"} fontcolor={'#000'} tag={'in Visa'} /> : <Badges color={"red"} fontcolor={'#000'} tag={'in Revive'} />}</>

                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ overflow: 'hidden', borderWidth: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: 80, width: 80, backgroundColor: '#000', borderRadius: 100 }}>
                                            <CountryFlag isoCode="ca" size={83} />
                                            {/* <Image style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} source={canadaflag} /> */}
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '100%', marginVertical: 30, borderBottomWidth: 1 }}></View>
                                <View style={{ justifyContent: 'space-evenly' }}>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Dec 2022 , 19</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Fees Status:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Fees Not Paid</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: 20 }}>
                                        <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Course:</Text>
                                        <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>COMPUTER PROGRAMMING(CO-OP)</Text>
                                    </View>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Intake :</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>For SEP-2020</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Course Time :</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>2 Years </Text>
                                        </View>
                                    </View>
                                    <Button title={'Offer Letter Received'} color={'#A9EF90'} btntxtcolor={'#000'} />
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Offer Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Sep 30 , 20</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Offer Type:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Unconditional</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Selection Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Nov 30 , -1</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Course Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>Jan 01 , 70</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    black:{
        color:'#3f3f3f',
    },
    homedwd: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        backgroundColor: '#f8f8f8',
    },
    btn: {
        height: 50,
        
        width: '100%',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    btntext: {
        
        fontSize: 20,
        color: '#fff'
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerBackground: {
        marginHorizontal: 5,
        width: '90%',
        borderRadius: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        flex: 1,
        borderRadius: 15,
        width: '100%',
        height: 200,
    }
    , banneradd: {
        flex: 1,
        borderRadius: 15,
        width: 370,
        height: 150,
    }
});

export default VisaAplication;
