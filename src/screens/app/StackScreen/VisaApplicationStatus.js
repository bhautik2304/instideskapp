import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, TouchableOpacity, Image } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button, Badges, ApplicationStatusCard } from '../../../components/index';
import { useSelector, useDispatch } from "react-redux";
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Fa from "react-native-vector-icons/FontAwesome5";
import SelectList from 'react-native-dropdown-select-list'
import CountryFlag from "react-native-country-flag";
import { canadaflag, avatar, addban } from '../../../assets';
import routeconst from '../../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { widthp } from '../../../Utils/Responsive';

const VisaApplicationStatus = ({ navigation }) => {
    const user = useSelector((state) => state.authUser.auth)
    return (
        <>
            <Screen screenName={'Your Profile'} navigation={navigation} header={true}>
                {/* <Homeheader navigation={navigation} logo userinfo /> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.profileSection}>
                        <Text style={{ color: '#ffff', fontFamily: 'Poppins-Bold', fontSize: widthp('5%') }}>Your Visa Applications</Text>
                        <View style={{ paddingVertical: vs(0), marginVertical: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ overflow: 'hidden', height: s(100), width: s(100), backgroundColor: '#000', borderRadius: s(100) }}>
                                <Image style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} source={avatar} />
                            </View>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: vs(5) }}>
                                <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular', fontSize: s(17), }}>{user.name ? user.name : "Bhavesh BhagChandani"}</Text>
                                <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular', fontSize: s(17), }}>{user.mobaile ? user.mobaile : "0919081770314"}</Text>
                                <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular', fontSize: s(17), }}>{user.email ? user.email : "SURAT_19"}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.detailSection, styles.homedwd]}>
                        <View style={{ borderBottomWidth: ms(5), width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
                        <Text style={{ color: '#000', fontFamily: 'Poppins-Bold', fontSize: widthp('5%'), marginVertical: vs(20) }}> Visa Applications</Text>


                        <ApplicationStatusCard navigation={navigation} />
                        <ApplicationStatusCard navigation={navigation} status />


                        <ScrollView style={{ paddingVertical: 0 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                            <View style={[styles.bannerBackground]}>
                                <Image source={addban} resizeMode='cover' style={styles.banneradd} />
                            </View>
                            <View style={[styles.bannerBackground]}>
                                <Image source={addban} resizeMode='cover' style={styles.banneradd} />
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    profileSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    homedwd: {
        borderTopLeftRadius: s(20),
        borderTopRightRadius: s(20),
        paddingVertical: vs(20),
        backgroundColor: '#f8f8f8',
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
    banneradd: {
        flex: 1,
        borderRadius: 15,
        width: ms(360),
        height: vs(150),
    }
})

export default VisaApplicationStatus;

const VisaAppCard = ({ user, onPress }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={{ width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 15, marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'space-evenly' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16, marginBottom: 20 }}>GEORGIAN COLLEGE</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Canada , Barrie</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Status</Text>
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
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold' }}>Show More</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </>
    )
}