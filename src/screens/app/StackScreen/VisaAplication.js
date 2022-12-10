import React, { useState } from 'react';
import { View, StyleSheet,Linking, ScrollView, Switch, Text, TouchableOpacity,Image } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button, Badges } from '../../../components/index';
import { useSelector, useDispatch } from "react-redux";
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Fa from "react-native-vector-icons/FontAwesome5";
import SelectList from 'react-native-dropdown-select-list'
import CountryFlag from "react-native-country-flag";
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { widthp } from '../../../Utils/Responsive';
// admission_copy
const VisaAplication = ({route, navigation,data }) => {
    const { id } = route.params;
    // console.log(id);
    const {application,code,loading} = useSelector((state) => state.application)
    const newapp=application.filter((data) => data.admission_id == id)[0]
    console.log(newapp);
    const statu=(newapp.application_status == 'Defer  Intake')
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
                                        <Text style={{ color:'#3f3f3f', fontFamily: 'Poppins-Regular',  fontSize: 16, marginBottom: 5 }}>{newapp.university_name}</Text>
                                        <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular',  fontSize: 16 }}>{newapp.country_name}</Text>
                                        <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular',  fontSize: 16 }}>{newapp.campus_name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginTop:5 }}>
                                            <Text style={{color:'#3f3f3f', fontFamily: 'Poppins-Regular',  fontSize: 16 }}>Status</Text>
                                            <View style={{ marginHorizontal: 30 }}>
                                                <>{!statu ?  <Badges color={"red"} fontcolor={'#fff'} tag={newapp.application_status} /> : <Badges color={"#A9EF90"} fontcolor={'#fff'} tag={'in Visa'} />}</>

                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        
                                    </View>
                                </View>
                                <View style={{ width: '100%', marginVertical: 30, borderBottomWidth: 1 }}></View>
                                <View style={{ justifyContent: 'space-evenly' }}>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Application Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{new Date(newapp.applicationdate).toDateString()}</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Fees Status:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{}</Text>
                                        </View>
                                    </View>
                                    {/*  */}
                                    <View style={{ marginVertical: 20 }}>
                                        <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Course Name:</Text>
                                        <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{newapp.course_name}</Text>
                                    </View>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Intake Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{newapp.intake_month} {newapp.intake_year}</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Offer Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{null}</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Offer Type:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{(newapp.offer_type == '1') ? 'Conditional' : 'Unconditional'}</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Offer Expiry Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{new Date(newapp.offerexpire).toDateString()}</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Course Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{new Date(newapp.coursedate).toDateString()}</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Submission Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{new Date(newapp.submissiondate).toDateString()}</Text>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'Poppins-Bold',  fontSize: 16 },styles.black]}>Course Date:</Text>
                                            <Text style={[{ fontFamily: 'Poppins-Regular',  fontSize: 16 },styles.black]}>{new Date(newapp.coursedate).toDateString()}</Text>
                                        </View>
                                    </View>
                                    <Button title={'Offer/Admission Letter'} color={'#A9EF90'} onPress={()=>Linking.openURL(newapp.admission_copy)} btntxtcolor={'#000'} />
                                    <Button title={'Fees Receipt'} color={'#A9EF90'} onPress={()=>Linking.openURL(newapp.fees_receipt)} btntxtcolor={'#000'} />
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
// shikhasherawala@gmail.com
