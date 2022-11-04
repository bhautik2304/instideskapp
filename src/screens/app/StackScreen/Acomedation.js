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
const Acomedation = ({ navigation }) => {

    return (
        <>
            <Screen navigation={navigation} backgrond={'#0D77AB'} header={true} bootamtab={true} >
                {/* <Homeheader navigation={navigation} userinfo logo /> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.container, styles.homedwd]}>
                        <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 10 }}></View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                            <HomeCArd onPress={() => navigation.navigate(routeconst.AcomedationProfile)} />
                            <HomeCArd onPress={() => navigation.navigate(routeconst.AcomedationProfile)} />
                                <HomeCArd onPress={() => navigation.navigate(routeconst.AcomedationProfile)} />
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
        // width: 370,
        height: 150,
    }
})

export default Acomedation;


const HomeCArd = ({ onPress }) => {
    return (
        <>

            <View style={{ width: '100%', backgroundColor: '#fff', borderRadius: 15, padding: 15, marginVertical: 15 }}>
                <View style={{ height: 200, width: '100%' }} >
                    <Image source={Home} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 15 }} />
                </View>
                <View style={{ margin: 15 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000' }}>Townhouse, Canada</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: 'red' }}>USD $1,665 per month</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000' }}>CAD $2,250 per month</Text>
                        </View>


                    </View>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000' }}>6355 PERTH Street, Richmond, Ontario K0A 2Z0</Text>
                    </View>
                    <Button title={'View Details'} btntxtcolor="#3f3f3f" color={'#A9EF90'} onPress={onPress} />
                </View>
            </View>
        </>
    )
}