import React,{useEffect} from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity as To, Text, StatusBar, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Ant from "react-native-vector-icons/AntDesign";
import Fa from "react-native-vector-icons/FontAwesome5";
import { logoutUsers, loginUsers } from '../../Redux/Slice/authslice';
import { ApplicationStatusCard, Button, AuthCard, CollegesCard, Homeheader, Screen, Textinput } from "../../components";
import routeconst from '../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { widthp } from '../../Utils/Responsive';
import { getPurpose } from "../../Redux/Slice/purposeSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch()
    const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)
    const { email_id, first_name } = useSelector((state) => state.authUser.auth)
    const userStatus = useSelector((state) => state.authUser.authStatus)
    const application = useSelector((state) => state.application)
    // const clearAll = async () => {
    //     try {
    //       AsyncStorage.removeItem('user', (err) => console.log('userId', err))
    //     //   alert('done')
    //     } catch(e) {
    //         // clear error
    //     }
    //     console.log('logout Done.')
    // }
    // shikhasherawala@gmail.com
    const logout = () => {
        // dispatch(loginUsers(false))
        dispatch(logoutUsers(false))
            // clearAll()
        }
    useEffect(() => {
        // userStatus==true ? dispatch(fetchApplication(user.inquiry_id)) : null
        dispatch(getPurpose())
      }, [userStatus]);
    //  const username = AsyncStorage.getItem('user')
    // console.log(`UserName : ${username}`)
    return (
        <>
            <Screen navigation={navigation} backgrond={'#0D77AB'} bootamtab={true} >
                <Homeheader navigation={navigation} userinfo logo />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        {
                            userStatus ?
                                <>
                                    <View style={{ width: '100%' }}>
                                        <To onPress={() => navigation.navigate(routeconst.StudentProfile)}>
                                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
                                                <View style={{ height: 80, width: '95%', borderRadius: 20, justifyContent: 'center', paddingHorizontal: 30, backgroundColor: '#fff' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: widthp('3.8%'), color: '#000' }}>Welcome {first_name} !!</Text>
                                                    <Text>{email_id}</Text>
                                                </View>
                                            </View>
                                        </To>
                                    </View>
                                </>
                                :
                                <></>
                        }

                    </View>
                    <View style={[styles.container, styles.homedwd]}>
                        <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>

                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
                            {
                                userStatus ?
                                    <>
                                        <View style={{ width: '95%', padding: 30, backgroundColor: '#fff', borderRadius: 20, marginVertical: 20 }}>
                                            <Text style={{ fontSize: widthp('4%'), fontWeight: 'bold' }}>Your Account</Text>
                                            <MenuLink Title={'Your Student Profile'} Iconname={''} navigation={navigation} rotename={routeconst.StudentProfile} />
                                            <MenuLink Title={'Your Courses'} Iconname={''} navigation={navigation} rotename={routeconst.Notification} />
                                            <MenuLink Title={'Notifications'} Iconname={''} navigation={navigation} rotename={routeconst.Notification} />
                                            {/* <MenuLink Title={'Forex & Fund Transfer'} Iconname={''} navigation={navigation} rotename={routeconst.ForexFundTransfer} /> */}
                                            <MenuLink Title={'Account & Invoices'} Iconname={''} navigation={navigation} rotename={routeconst.AccountandInvoice} />
                                        </View>
                                        <View style={{ width: '95%', padding: 30, backgroundColor: '#fff', borderRadius: 20, marginVertical: 20 }}>
                                            <Text style={{ fontSize: widthp('4%'), fontWeight: 'bold' }}>Services</Text>
                                            <MenuLink Title={'Ambassador Profiles'} Iconname={''} navigation={navigation} rotename={routeconst.Ambassader} />
                                            <MenuLink Title={'Accommodation Search'} Iconname={''} navigation={navigation} rotename={routeconst.Acomedation} />
                                            <MenuLink Title={'Consultation Request'} Iconname={''} navigation={navigation} rotename={routeconst.Consultation} />
                                            <MenuLink Title={'IELTS Coaching Section'} Iconname={''} navigation={navigation} rotename={routeconst.Ielts} />
                                            <MenuLink Title={'Chat With Us'} Iconname={''} navigation={navigation} rotename={routeconst.Notification} />
                                            {/* <MenuLink Title={'Find Jobs'} Iconname={''} navigation={navigation} rotename={routeconst.Job} /> */}
                                            <MenuLink Title={'Student Emergency'} color={'red'} Iconname={''} navigation={navigation} rotename={routeconst.Notification} />
                                        </View>
                                    </>
                                    :
                                    <>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                            <View style={{ width: '95%', padding: 30, backgroundColor: '#fff', borderRadius: 20, marginVertical: 20 }}>
                                                <Text style={{ fontSize: widthp('4%'), fontWeight: 'bold' }}>Services</Text>
                                                <MenuLink Title={'Ambassador Profiles'} Iconname={''} navigation={navigation} rotename={routeconst.Ambassader} />
                                                <MenuLink Title={'Accommodation Search'} Iconname={''} navigation={navigation} rotename={routeconst.Acomedation} />
                                                <MenuLink Title={'Consultation Request'} Iconname={''} navigation={navigation} rotename={routeconst.Consultation} />
                                                <MenuLink Title={'IELTS Coaching Section'} Iconname={''} navigation={navigation} rotename={routeconst.Ielts} />
                                                <MenuLink Title={'Chat With Us'} Iconname={''} navigation={navigation} rotename={routeconst.Notification} />
                                                {/* <MenuLink Title={'Find Jobs'} Iconname={''} navigation={navigation} rotename={routeconst.Job} /> */}
                                                <MenuLink Title={'Student Emergency'} color={'red'} Iconname={''} navigation={navigation} rotename={routeconst.Notification} />
                                            </View>

                                        </View>
                                    </>
                            }
                            {userStatus ?
                                <>
                                    <To style={styles.btnred} onPress={logout}>
                                        <View style={styles.btnred}>
                                            <Text style={styles.btntext}>Logout</Text>
                                        </View>
                                    </To>
                                </> : <>
                                    <To style={[styles.btnred, { backgroundColor: '#0D77AB' }]} onPress={() => navigation.navigate(routeconst.login)}>
                                        <View style={[styles.btnred, { backgroundColor: '#0D77AB' }]}>
                                            <Text style={styles.btntext}>Login</Text>
                                        </View>
                                    </To>
                                </>}

                        </View>
                    </View>
                </ScrollView>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    btnred: {
        backgroundColor: 'red',
        height: vs(40),
        fontWeight: 'bold',
        width: '70%',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vs(10),
        marginVertical: vs(10),
    },
    btn: {
        backgroundColor: '#0D77AB',
        height: vs(40),
        fontWeight: 'bold',
        width: '70%',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vs(10),
        marginVertical: vs(10),
    },
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

export default Profile;

const MenuLink = ({ Title, Iconname, color, rotename, navigation }) => {
    const textcolor = color ? color : '#000';
    // const icon=Iconname ? Iconname : 'graduation-cap';
    return (
        <>
            <To onPress={() => navigation.navigate(rotename)}>
                <View style={{ height: vs(50), marginVertical: vs(5), width: '100%', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: vs(10), borderBottomWidth: widthp('0.3%') }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {/* heading */}
                            {/* <Fa name={icon} color={'red'} size={20} style={{marginRight:15}} />  */}
                            {Iconname ? Iconname : <Fa name='graduation-cap' color={'red'} size={s(20)} style={{ marginRight: 15 }} />}
                            <Text style={{ fontFamily: 'Poppins', fontSize: widthp('3.5%'), color: textcolor }}>{Title}</Text>
                        </View>

                        <View>
                            {/* icon */}
                            <Ant name='right' color={'red'} size={s(20)} />
                        </View>
                    </View>
                </View>
            </To>
        </>
    );
}

