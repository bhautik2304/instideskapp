import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, TouchableOpacity, Image } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button } from '../../../components/index';
import { useSelector, useDispatch } from "react-redux";
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectList from 'react-native-dropdown-select-list'
import CountryFlag from "react-native-country-flag";
import { Home } from '../../../assets';
import routeconst from '../../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { heightp, widthp } from '../../../Utils/Responsive';
const AcomedationProfile = ({ navigation }) => {
    return (
        <>
            <Screen navigation={navigation} backgrond={'#0D77AB'} header={true} >
                {/* <Homeheader navigation={navigation} userinfo logo /> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                    </View>
                    <View style={[styles.container, styles.homedwd]}>
                        <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 10 }}></View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <View style={{ width: '100%', height: 200 }}>
                                    <Image source={Home} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} />
                                </View>
                                <View style={{ width: '90%', marginVertical: 30 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ justifyContent: 'center', }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000' }}>Townhouse, Canada</Text>
                                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: 'red' }}>USD $1,665 per month</Text>
                                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000' }}>CAD $2,250 per month</Text>
                                        </View>
                                        <View>
                                        </View>


                                    </View>
                                    <View style={{ width: '90%', flexDirection: 'row', marginTop: 30 }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000' }}>6355 PERTH Street, Richmond, Ontario K0A 2Z0</Text>
                                    </View>
                                    <View style={{ width: '100%', marginVertical: 30, borderBottomWidth: 1 }}></View>
                                    <Button title={'Contact Leaser'} color={'#A9EF90'} btntxtcolor={'#000'} onPress={() => alert('No Data Found')} />
                                    <View style={{ width: '100%', marginVertical: 30, borderBottomWidth: 1 }}></View>
                                    <View style={{ justifyContent: 'space-evenly' }}>
                                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#000', fontSize: 18 }}>Description</Text>
                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>Translate to English
                                                Enjoy the luxury of moving into a NEW, never lived in home featuring all builder upgrades offered. Upon entering the home you'll be greeted by an open concept living/dining kitchen area featuring hardwood, 9ft ceilings, ample cabinet and granite counter space, tile backsplash</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', marginVertical: 30, borderBottomWidth: 1 }}></View>
                                    <View style={{ justifyContent: 'space-evenly' }}>
                                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#000', fontSize: 18 }}>More Details</Text>
                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>Property Type:</Text>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>Townhouse Year </Text>
                                        </View>
                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>Built:</Text>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>2022</Text>
                                        </View>
                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>Car Spaces:</Text>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>2</Text>
                                        </View>
                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>Rooms:</Text>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular', fontSize: widthp('4%') }}>3 bedrooms , 4 bathrooms</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    btntext: {
        fontWeight: 'bold',
        fontSize: widthp('3.7%'),
        color: '#fff'
      },
      homedwd: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        backgroundColor: '#f8f8f8',
      },
      btn: {
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
})

export default AcomedationProfile;
