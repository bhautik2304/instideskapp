import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button, Badges } from '../../../components/index';
import { LightLogo, DarkLogo, addban, avatar } from '../../../assets/';
import { useSelector, useDispatch } from "react-redux";
import routeconst from '../../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import UserAvatar from 'react-native-user-avatar';
import { heightp, widthp } from '../../../Utils/Responsive';

const AmbesadorProfile = ({ navigation,route }) => {
  const ambesador = useSelector((state) => state.ambesador.ambesader)
  const {id}=route.params
  const ambedata=ambesador.filter((data)=>data.id === id)
  const {name,cource_name,email, college_name, country, city, state,social_link, loc, last_name,description,status,Whatsap_no,Satus_time }=ambedata[0]
  console.log(email)
  return (
    <>
      <Screen screenName={'Your Ambesador'} navigation={navigation} header={true}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileSection}>
            {/* <View style={{ width: '80%', height: 200, backgroundColor: '#000', borderRadius: 15, marginVertical: 15 }}>

            </View> */}
          </View>
          <View style={[styles.detailSection, styles.homedwd]}>
            <View style={{ borderBottomWidth: ms(5), width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
            <Text></Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', paddingHorizontal: 10 }}>
              <UserAvatar style={{marginBottom:20}} size={widthp('20%')} name={name + ' ' + last_name} />
              <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), }}>{name} {last_name}</Text>
                <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('3%'), }}>{cource_name}</Text>
                <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('3%'), }}>{college_name}</Text>
                <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('3%'), }}>{city}, {state}, {country}</Text>
                <Text style={{ color:status ? 'green' : 'red', fontFamily: 'Poppins-Bold', fontSize: widthp('3.5%'), }}>{status ? 'Online' : 'Offline'}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:'+email)} style={[styles.btn, { backgroundColor: '#4285F4', width: '40%' }]}>
                <View>
                  <Text style={[styles.btntext, { fontSize: widthp('4%') }]}>E-Mail Me</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/+1'+Whatsap_no)} style={[styles.btn, { backgroundColor: '#25D366', width: '40%' }]}>
                <View>
                  <Text style={[styles.btntext, { fontSize: widthp('4%') }]}>Whatsapp Me</Text>
                </View>
              </TouchableOpacity>

            </View>
            <View style={{ width: '84.5%', marginVertical: 20 }}>
              <Text style={[{ fontSize: widthp('4%'), color: '#3f3f3f' }]}>We want to empower and strengthen students across India and abroad, who will serve as Student Ambassador specialists in their respective institutions</Text>
            </View>

            <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
              <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>About Me</Text>
            </View>
            <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
              {/* cotent */}
              <View style={{ width: '84%', marginVertical: 20 }}>
                <Text style={[{ fontSize: widthp('4%'), color: '#3f3f3f' }]}>{description}</Text>
              </View>
            </View>
            <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
              <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>College Details   </Text>
            </View>
            <View style={[{ width: '90%' }]}>
              {/* cotent */}
              <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('4%'), }}>{college_name}</Text>
              <Text style={{ color: '#3F3F3F', fontFamily: 'Poppins-Bold', fontSize: widthp('3.4%'), }}>{city},{state}, {country}</Text>
            </View>
            <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
              <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>Social Profiles</Text>
            </View>
            <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
              {/* cotent */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
              <ScrollView style={{ flexDirection: 'row', paddingVertical:  0 }} horizontal={true}>
                {social_link.length > 0 ? social_link.map((e)=><>
                <TouchableOpacity onPress={() => Linking.openURL(e.link)}>
                  <Badges tag={e.platform_Name} />
                </TouchableOpacity>
                </>) : 
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color: '#3F3F3F', fontFamily: 'Poppins-Bold',marginHorizontal:20}}>No Data Found</Text>
                </View>}
              </ScrollView>
              </View>
            </View>
            <View style={[styles.container, { backgroundColor: '#0D77AB', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginVertical: 20 }]}>
              <Text style={{ fontSize: widthp('4%'), color: '#fff' }}>Highlights</Text>
            </View>

            <View style={[styles.row, { justifyContent: 'center', alignItems: 'center', width: '100%' }]}>
              <ScrollView style={{ flexDirection: 'row', paddingVertical:  0 }} horizontal={true}>
                <TouchableOpacity>
                  <Badges tag={name + ' ' + last_name} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Badges tag={city} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Badges tag={state} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Badges tag={college_name} />
                </TouchableOpacity>

              </ScrollView>

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

export default AmbesadorProfile;
