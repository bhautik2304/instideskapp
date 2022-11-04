import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button, Badges } from '../../../components/index';
import { LightLogo, DarkLogo, addban, avatar, college1, default_unilogo } from '../../../assets/';
import { useSelector, useDispatch } from "react-redux";
import routeconst from '../../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import { heightp, widthp } from '../../../Utils/Responsive';
import { Colleges } from '../../../Api';

const CollegeProfile = ({ route, navigation }) => {
    const { id } = route.params
    const { colleges } = useSelector((state) => state.colleges)
    const data = colleges.filter((data) => data.university_id === id)
    const { tag_line, title_tag, meta_description, university_name, uni_logo, address, website, image1,image2, intl_contact, intl_email, comm_email, comm_contact, city_guide, video_link, comm_name, map_link } = data[0]
    return (
        <>
            <Screen screenName={'Your Ambesador'} navigation={navigation} header={true}>
            {/* <Homeheader navigation={navigation} logo userinfo/> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.profileSection}>
                        <Text style={{ fontSize: widthp('4%'), fontFamily: 'Poppins-Bold', color: '#fff' }}>{university_name}</Text>
                        <View style={{ width: '100%', height: 200, borderRadius: 15, marginVertical: 15 }}>
                            <ScrollView style={{ paddingVertical: 0 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                                <View style={[styles.bannerBackground]}>
                                    <Image source={image1 ? {uri:`https://gocoolgroup.com/crmportal/${image1}`} : addban} resizeMode='cover' style={styles.banneradd} />
                                </View>
                                <View style={[styles.bannerBackground]}>
                                    <Image source={image2 ? {uri:`https://gocoolgroup.com/crmportal/${image2}`} : addban} resizeMode='cover' style={styles.banneradd} />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={[styles.detailSection, styles.homedwd]}>
                        <View style={{ borderBottomWidth: ms(5), width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
                        <View style={{ width: '50%', height: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginVertical: 10 }}>
                            <Image source={uni_logo ? { uri: 'https://gocoolgroup.com/crmportal/' + uni_logo } : default_unilogo} resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 15 }} />
                        </View>

                        <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
                            <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>About college</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
                            {/* cotent */}
                            <View style={{ width: '84%', marginVertical: 20 }}>
                                <Text style={[{ fontSize: widthp('3.6%'), fontFamily: 'Poppins-Regular', color: '#3f3f3f' }]}>{tag_line ? tag_line : 'No Data Found'}</Text>
                                <Text></Text>
                                {title_tag ? <Text style={[{ fontSize: widthp('3.6%'), fontFamily: 'Poppins-Regular', color: '#3f3f3f' }]}>{title_tag}</Text> : null}
                                <Text></Text>
                                {meta_description ? <Text style={[{ fontSize: widthp('3.6%'), fontFamily: 'Poppins-Regular', color: '#3f3f3f' }]}>{meta_description}</Text> : null}
                            </View>
                        </View>


                        {/* Collage Detail */}
                        <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
                            <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>College Details   </Text>
                        </View>
                        <View style={{ width: '100%', paddingHorizontal: 15 }}>
                            <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), textAlign: 'left', }}>Address</Text>
                            <TextData data={address} />
                            <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), textAlign: 'left', }}>Initial Email</Text>
                            <TextLink title={intl_email} link={`mailto:${intl_email}`} />
                            <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), textAlign: 'left', }}>Common Email</Text>
                            <TextLink title={comm_email} link={`mailto:${comm_email}`} />
                            <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), textAlign: 'left', }}>Initial Contact [India]</Text>
                            <TextLink title={intl_contact} link={`tel:${intl_contact}`} />
                            <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), textAlign: 'left', }}>Contact Person</Text>
                            <TextData data={comm_name}/>
                        </View>
                        <View style={{ borderBottomWidth: ms(3), width: '30%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 15 }}></View>
                        <View style={{ width: '100%', paddingHorizontal: 15, marginTop: 15 }}>
                            <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), textAlign: 'left', }}>College Location</Text>
                            <TextLink map={map_link} link={String(map_link)} />

                            {/* <TouchableOpacity onPress={() => Linking.openURL(String(map_link))}>
                                <Text style={{ color: 'red', fontFamily: 'Poppins-Regular', fontSize: widthp('4%'), textAlign: 'left', }}>Locate Collage</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={[{ alignItems: 'flex-start', width: '100%', marginVertical: 8.5, paddingHorizontal: 24 }]}>

                        </View>
                        {/* college website */}




                        <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
                            <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>Book your free counselling</Text>
                        </View>
                        <View style={[{ justifyContent: 'center', alignItems: 'center', width: '100%' }]}>

                            <View style={{ width: '85%', backgroundColor: '#2596be', padding: 10, borderRadius: 10 }}>
                                <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>Get flawless step-wise guidance to ensure hassle free study abroad procedure. Consult the best study abroad consultant instidesk.com</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>

                                    <TouchableOpacity onPress={() => Linking.openURL('tel:919824452328')}>
                                        <Text style={{ fontSize: widthp('4%'), color: '#fff', margin: 10 }}>Call Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/919824452328')}>
                                        <Text style={{ fontSize: widthp('4%'), color: '#fff', margin: 10 }}>Whatsapp</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                        <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
                            <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>Website</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
                            {/* cotent */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <TextLink title={website} link={website}/>
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
        width: ms(300),
        height: vs(150),
        margin: 4,
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
})

export default CollegeProfile;

const TextData = ({ data }) => data ?
    <>
        <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Regular', fontSize: widthp('4%'), }}>{data}</Text>
        <Text></Text>
    </>
    :
    <>
        <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Regular', fontSize: widthp('4%'), }}>No Data Found</Text><Text></Text>
    </>
const TextLink = ({ title, link ,map }) => title || map  ?
    <>
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={{ color: map ? 'red' : '#3F3F3F', fontFamily: 'Poppins-Regular', fontSize: widthp('4%'), }}>{map ? 'Locate College' : title}</Text>
        </TouchableOpacity>
        <Text></Text>
    </>
    :
    <>
        <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Regular', fontSize: widthp('4%'), }}>No Data Found</Text><Text></Text>
    </>
