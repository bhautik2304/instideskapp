import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import { useSelector } from "react-redux";
import { Canadaflag, jobaddban, Banner1, Banner2, college1, college2, college3, college4, addban } from "../../../assets";
import { ApplicationStatusCard, Badges, Button, CollegesCard, Homeheader, Screen, Textinput } from "../../../components";
import { s, vs, ms, mvs } from 'react-native-size-matters';
import routeconst from "../../../constants/routeconst";
import { widthp,heightp } from "../../../Utils/Responsive";

const tag = ['Canada', 'Australia', 'United Kingdom', 'United States', 'Europe']

const Job = ({ navigation }) => {
    return (
        <>
            <Screen navigation={navigation} backgrond={'#0D77AB'} header={true} >
                {/* <Homeheader navigation={navigation} logo userinfo /> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        {/* Banner */}
                    </View>
                    <View style={[styles.container, styles.homedwd]}>
                        <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
                        <View style={[styles.container, { paddingHorizontal: 20, marginVertical: 10 }]}>
                            <Text style={{ fontSize: 20, color: '#3F3F3F', marginVertical: 10 }}>Jobs Search </Text>
                            <Textinput fullwidth placeholder={"Search  -  Job title, City, Company, Keyword "} />
                        </View>
                        <View style={{ borderBottomWidth: 5, width: '70%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 10 }}></View>
                        <ScrollView style={{ flexDirection: 'row', paddingVertical: 10 }} horizontal={true}>
                            {!!tag ? tag.map((data) => <>
                                <TouchableOpacity>
                                    <Badges tag={data} />
                                </TouchableOpacity>
                            </>) : null}
                        </ScrollView>
                        <View style={[styles.container, { marginTop: 20 }]}>
                            {/* <Jobcard /> */}
                            <View style={{ width: '100%', height: heightp('60%'), backgroundColor: '#f8f8f8' }}>
                                {/* <Image source={fcs} resizeMode='center' style={{ height: '100%', width: '100%' }} /> */}
                                <View style={[styles.container,styles.center, { marginTop: 20 }]}>
                                    <Text>No Data Found</Text>
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
    },
    btn: {
        backgroundColor: '#0D77AB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 25,
    },
    btntext: {
        color: '#fff',
    },
    marginy_15: {
        marginHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
    },
    center: {
        alignItems: 'center',
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderLeftWidth: 10,
        padding: 10,
    },
    justifyContentbetwin: {
        justifyContent: 'space-between',
    },
    cardv: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    cardht: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: '#3f3f3f'
    },
    poppins_regular: {
        fontFamily: 'Poppins-Regular',
    },
    font_14: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3f3f3f'
    }
})

export default Job;

const Jobcard = () => {
    return (
        <>
            <View style={[styles.card, { marginVertical: 10, borderColor: "#0D77AB", }]}>
                <View style={[styles.justifyContentbetwin, styles.center, styles.row, { margin: 10 }]}>
                    <Text style={{ color: 'red', fontSize: 15, fontFamily: 'Poppins-Bold' }}></Text>
                    <View>
                        <View style={[styles.row, styles.center]}>
                            <View>
                                <View style={{ overflow: 'hidden', height: 50, width: 50, backgroundColor: '#fff', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                    <Canadaflag height={60} width={60} />
                                </View>
                            </View>
                            <View style={styles.marginy_15}>
                                <Text style={[styles.poppins_regular, styles.font_14]}>Georgian College</Text>
                                <Text>Canada , Barrie</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.marginy_15]}>
                    <Text style={[styles.poppins_regular, styles.font_14]}>Software Developer Intern</Text>
                    <Text style={[styles.poppins_regular, styles.font_14]}>Remote Location</Text>
                    <Text>Alberta , Canada</Text>
                    <Text></Text>
                    <Text style={[styles.poppins_regular, styles.font_14]}>20000 a month  |   1 Day Ago</Text>
                </View>
                <View style={[styles.center, { marginTop: 15 }]}>
                    <TouchableOpacity style={[styles.btn]}>
                        <View>
                            <Text style={styles.btntext} >Show More</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <Text style={{ color: 'red', fontSize: 15, fontFamily: 'Poppins' }}></Text> */}
                </View>
            </View>
        </>
    )
}