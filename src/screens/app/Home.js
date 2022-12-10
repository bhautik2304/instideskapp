import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, Image, setBackgroundColor, TouchableOpacity, Linking, StatusBar, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Pending, Banner1, Banner2, college1, college2, college3, college4, addban } from "../../assets";
import { ApplicationStatusCard, Button, AuthCard, CollegesCard, Homeheader, Screen, Textinput } from "../../components";
import routeconst from "../../constants/routeconst";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthp, heightp, heightpnum } from "../../Utils/Responsive";
import { Colleges } from "../../Api";
import { fetchCollege } from '../../Redux/Slice/Collegeslice';
import { fetchCountry } from '../../Redux/Slice/countrySlice';
import axios from "axios";
import { fetchAmbesader } from '../../Redux/Slice/studentAmbbesadorSlice';
import { fetchApplication } from "../../Redux/Slice/applicationSlice";
import { getPurpose } from "../../Redux/Slice/purposeSlice";
import { fetchstate } from "../../Redux/Slice/stateSlice";

import { registerUserData } from "../../Redux/Slice/authslice";

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  
const user = useSelector((state) => state.authUser.auth)
const userStatus = useSelector((state) => state.authUser.authStatus)
useEffect(() => {
    
    dispatch(fetchAmbesader())
    dispatch(fetchCountry())
    dispatch(fetchCollege())
    dispatch(fetchstate())
    userStatus==true ? dispatch(fetchApplication(user.inquiry_id)) : null
    // dispatch(getPurpose())
  }, [userStatus]);
  
  const {application,code,loading} = useSelector((state) => state.application)
  const data = useSelector((state) => state.authUser)
  const { colleges } = useSelector((state) => state.colleges)
  // console.log(data)
  return (
    <>
      <Screen navigation={navigation} backgrond={'#0D77AB'} bootamtab={true} >
        <Homeheader navigation={navigation} userinfo />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            {/* Banner */}
            <View style={[styles.bannerBackground]}>
              <Image source={Banner1} resizeMode='cover' style={styles.banner} />
            </View>
          </View>
          <View style={[styles.container, styles.homedwd]}>
            <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
            <View style={[styles.container, { justifyContent: 'flex-start', alignItems: 'flex-start', paddingHorizontal: 20, marginVertical: 20 }]}>
              <Text style={{ fontSize: widthp('5%'), color: '#3F3F3F' }}>Application Status</Text>
            </View>
              
            {userStatus ? (code=='5') ? application.map((e,k)=><ApplicationStatusCard key={k} navigation={navigation} status={e.application_status} data={e} id={e.admission_id} />) : <><Text style={{color:'red'}}>{application}</Text></>  : <AuthCard navigation={navigation} />}
            <View style={[styles.container, { marginVertical: hp(5) }]}>
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


            <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
              <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>Top Colleges</Text>
            </View>
            <ScrollView style={{ paddingVertical: 0 }} showsHorizontalScrollIndicator={false} horizontal={true}>
              {!!colleges ? colleges.slice(0, 10).map((data) => <CollegesCard key={data.university_id} navigation={navigation} data={data} />) : null}
            </ScrollView>
            <Button title={'All Colleges'} onPress={() => navigation.navigate(routeconst.CollegesResult)} btntxtcolor={'#fff'} color={'#0D77AB'} width={200} />
            <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
              <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>Accommodation</Text>
            </View>
            <Textinput placeholder={'Search by area or city'} width="80%" />
          </View>
        </ScrollView>
      </Screen>
    </>
  );
};







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
  }
});

export default Home;

/* 
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{ backgroundColor: backgrond }}>
<View style={{ width: '100%', height: 200 }}>
<Image source={Banner2} resizeMode="contain" style={{ height: "100%", width: '100%' }} />
</View>


            <View style={{ width: '100%', paddingHorizontal: 15, marginVertical: 20 }}>
              <Text style={{ color: fontColor, fontFamily: 'Poppins-Bold', fontWeight: '500', fontSize: 20 }}>Your Request Status</Text>
              <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
                <View style={{ width: '100%', borderRadius: 20, justifyContent: 'center', paddingHorizontal: 30, backgroundColor: '#eee' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Mateicon name='progress-clock' style={{ marginRight: 15, marginVertical: 10 }} size={50} color={'red'} />
                <>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>Your Inquiry Status :</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}> In Progress</Text>
                </View>
                </>
                </View>
                <Text style={{ marginVertical: 10, fontFamily: 'Poppins', textAlign: 'center' }}>Your Inquiry is in progress, we will notify you ones it's finished. ( Account On Hold )</Text>
                </View>
                </View>
                </View>
                
                </View>
                <View style={{ width: '100%', paddingHorizontal: 10 }}>
                <View style={{ padding: 10, width: '100%', color: '#fff', marginVertical: 10 }}>
                <Text style={{ color: fontColor, fontFamily: 'Poppins-Bold', fontWeight: '500', fontSize: 20 }}>Colleges based on Country</Text>
                <ScrollView style={{ flexDirection: 'row', paddingVertical: 10 }} horizontal={true}>
                {!!tag ? tag.map((data) => <Badges tag={data} />) : null}
                </ScrollView>
                </View>
                </View>
                
                <View style={{ width: '100%', paddingHorizontal: 0 }}>
                <View style={{ width: '100%', color: '#fff' }}>
                <Text style={{ color: fontColor, fontFamily: 'Poppins-Bold', marginLeft: 20, fontWeight: '500', fontSize: 20 }}>Top Recommended Colleges</Text>
                <ScrollView style={{ paddingVertical: 0 }} horizontal={true}>
                {!!dtaforcard ? dtaforcard.map((data) => <Card data={data} />) : null}
                </ScrollView>
                </View>
                </View>
                
                </ScrollView>
                */
{/* */ }