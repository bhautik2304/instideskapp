import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button, Badges } from '../../../components/index';
import { LightLogo, DarkLogo, addban, avatar } from '../../../assets/';
import { useSelector, useDispatch } from "react-redux";

import routeconst from '../../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { widthp } from '../../../Utils/Responsive';
import UserAvatar from 'react-native-user-avatar';

const width=Dimensions.get('window').width;
const StudentProfile = ({ navigation }) => {
    const user = useSelector((state) => state.authUser.auth)

    const checkData=(data)=>data? data : "No Data Found"
    const {email_id,first_name,mobile_no,address,country1,education_result,education_year,education_stream,education_level} = useSelector((state) => state.authUser.auth)
    return (
        <>
            <Screen screenName={'Your Profile'} navigation={navigation} header={true}>
            {/* <Homeheader navigation={navigation} userinfo={false} /> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.profileSection}>
                        <Text style={{ color: '#ffff', fontFamily: 'Poppins-Bold', fontSize: width * 0.05 }}>Your Profile</Text>
                        <View style={{ paddingVertical: vs(0), marginVertical: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <UserAvatar size={widthp('20%')} bgColor="#fff" textColor='#3F3F3F' name={user.first_name +' '+user.last_name} />
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: vs(5) }}>
                                <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular', fontSize: width * 0.05, }}>{checkData(first_name)} {checkData(user.last_name)}</Text>
        
                                <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular', fontSize: width * 0.05, }}>{checkData(mobile_no)}</Text>
                                {/* <Text style={{ color: '#ffff', fontFamily: 'Poppins-Regular', fontSize: width * 0.04, }}>{user.email ? user.email : "SURAT_19"}</Text> */}
                            </View>
                        </View>
                    </View>
                    <View style={[styles.detailSection, styles.homedwd]}>
                        <View style={{ borderBottomWidth: ms(5), width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
                        <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: width * 0.05, marginVertical: vs(20) }}>Your Details</Text>
                        <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
                            <View style={{ width: '50%', paddingHorizontal: ms(5), alignItems: 'center' }}>
                                <View style={{ width: '75%', alignItems: 'flex-start' }}>
                                    <Text>Name</Text>
                                </View>
                                <Textinput value={checkData(first_name)} width={"78%"} />
                            </View>
                            <View style={{ width: '50%', paddingHorizontal: ms(5), alignItems: 'center' }}>
                                <View style={{ width: '75%', alignItems: 'flex-start' }}>
                                    <Text>Mobile No.</Text>
                                </View>
                                <Textinput value={mobile_no} width={"78%"} />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={{ width: '85%', alignItems: 'flex-start' }}>
                                <Text>Email</Text>
                            </View>
                            <Textinput value={checkData(email_id)} width={"86%"} />
                        </View>

                        <View style={[styles.container, { marginVertical: 15 }]}>
                            {/* Banner */}
                            <ScrollView style={{ paddingVertical: 0 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                                <View style={[styles.bannerBackground]}>
                                    <Image source={addban} resizeMode='cover' style={styles.banneradd} />
                                </View>
                                <View style={[styles.bannerBackground]}>
                                    <Image source={addban} resizeMode='cover' style={styles.banneradd} />
                                </View>
                            </ScrollView>
                        </View>
                        <Button onPress={()=>navigation.navigate(routeconst.VisaApplicationStatus)} title={'Visa Application'} width={'70%'} btntxtcolor={'#fff'} color={'#0D77AB'} />
                        <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Education Details</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
                            <View style={{ width: '50%', paddingHorizontal: ms(5), alignItems: 'center' }}>
                                <View style={{ width: '75%', alignItems: 'flex-start' }}>
                                    <Text>Education</Text>
                                </View>
                                <Textinput value={checkData(education_level)} width={"78%"} />
                            </View>
                            <View style={{ width: '50%', paddingHorizontal: ms(5), alignItems: 'center' }}>
                                <View style={{ width: '75%', alignItems: 'flex-start' }}>
                                    <Text>Result</Text>
                                </View>
                                <Textinput value={checkData(education_result)} width={"78%"} />
                            </View>
                        </View>


                        <View style={styles.container}>
                            <View style={{ width: '85%', alignItems: 'flex-start' }}>
                                <Text>Stream</Text>
                            </View>
                            <Textinput value={checkData(education_stream)} width={"86%"} />
                        </View>

                        <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
                            <View style={{ width: '50%', paddingHorizontal: ms(5), alignItems: 'center' }}>
                                <View style={{ width: '75%', alignItems: 'flex-start' }}>
                                    <Text>Passing Year</Text>
                                </View>
                                <Textinput value={checkData(education_year)} width={"78%"} />
                            </View>
                            <View style={{ width: '50%', paddingHorizontal: ms(5), alignItems: 'center' }}>
                                <View style={{ width: '75%', alignItems: 'flex-start' }}>
                                    <Text>Prefer Country</Text>
                                </View>
                                <Textinput value={checkData(country1)} width={"78%"} />
                            </View>
                        </View>
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

export default StudentProfile;

// const LabelInput=({labale})=>{
//     return(
//     <>
//         <View>

//         </View>
//     </>
//     )
// }

/*
<View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ width: '80%', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                <View style={{ justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>{user.name}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Status</Text>
                                        <View style={{ marginHorizontal: 30 }}>
                                            <>{user.status ? <Badges color={"#A9EF90"} fontcolor={'#000'} tag={'in Visa'} /> : <Badges color={"red"} fontcolor={'#000'} tag={'in Revive'} />}</>

                                        </View>
                                    </View>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>{user.mobaile}</Text>
                                </View>
                                <View>
                                    <View style={{ overflow: 'hidden', height: 80, width: 80, backgroundColor: '#000', borderRadius: 100 }}>
                                        <Image style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} source={avatar} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '100%', marginVertical: 30, borderBottomWidth: 1 }}></View>
                            <View style={{ justifyContent: 'space-evenly' }}>
                                <Text style={{ fontFamily: 'Poppins-Bold', color: '#000', fontSize: 18 }}>Your Details</Text>
                                <View style={{ marginVertical: 20 }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Email id:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>{user.email}</Text>
                                </View>
                                <View style={{ marginVertical: 20 }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Address:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>34, KRISHNA JYOT APPARTMENT, NR SIDDHI PALACE , SURAT</Text>
                                </View>
                                <View style={{ marginVertical: 20 }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Code:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>SURAT_19</Text>
                                </View>
                                <View style={{ marginVertical: 20 }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Prefer Country:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Canada</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', marginVertical: 30, borderBottomWidth: 1 }}></View>
                            <View style={{ justifyContent: 'space-evenly' }}>
                                <Text style={{ fontFamily: 'Poppins-Bold', color: '#000', fontSize: 18 }}>Education</Text>
                                <View style={{ marginVertical: 20 }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Education:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Bachelor degree</Text>
                                </View>
                                <View style={{ marginVertical: 20,flexDirection:'row',justifyContent:'space-between' }}>
                                    <View>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Result:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>8.08</Text>
                                    </View>
                                    <View>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Stream:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>INFORMATION TECHNOLOGY</Text>
                                    </View>
                                </View>
                                <View style={{ marginVertical: 20 }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>Passing Year:</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 16 }}>2019</Text>
                                </View>
                                <Button title={'Go To Visa Application'} btntxtcolor={'#fff'} color={'#0E8AC8'} onPress={()=>navigation.navigate(routeconst.VisaApplicationStatus)} />
                            </View>
                        </View>
                    </View>
*/