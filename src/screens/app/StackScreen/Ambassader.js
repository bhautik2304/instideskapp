import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import UserAvatar from 'react-native-user-avatar';
import { Pending, Banner1, Banner2, college1, college2, avatar } from "../../../assets";
import { Homeheader, Screen } from '../../../components/index';
import { useSelector, useDispatch } from "react-redux";
import { s, vs, ms, mvs } from 'react-native-size-matters';
import routeconst from '../../../constants/routeconst';
import { heightp, widthp } from '../../../Utils/Responsive';

const Ambassader = ({ navigation }) => {
  const { ambesader } = useSelector((state) => state.ambesador)
  
  return (
    <>
      {/* <Screen navigation={navigation} header={true}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: backgrond }}>
            <Homeheader logo />
            {!!forex ? forex.map((data) => <Administrator data={data} navigation={navigation} />) : null}
          </View>
        </ScrollView>
      </Screen> */}
      <Screen navigation={navigation} backgrond={'#0D77AB'} header={true} >
        {/* <Homeheader navigation={navigation} userinfo logo /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>

          </View>
          <View style={[styles.container, styles.homedwd]}>
            <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 5 }}></View>
        <View style={{width:'100%',height:heightp('100%'),flex:1,backgroundColor:'#f8f8f8'}}>

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('4.7%'), marginVertical: 30, textAlign: 'center', color: '#000' }}>Student Ambassadors</Text>
              {ambesader ? ambesader.map((data) => <Administrator data={data} navigation={navigation} />) : null}
            </View>
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

export default Ambassader;


const Administrator = ({ data, navigation }) => {
  const { name, college_name, country, city, state, loc, last_name, id,profile } = data
  console.log(data)
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeconst.AmbassaderProfile, { id: id })} >
        <View style={{ width: '90%',height:heightp('28%'), alignItems: 'center' }}>

          <View style={{ flex:1, width: '90%', backgroundColor: '#fff', borderRadius: 20, paddingVertical: 20, marginBottom: 20 }}>
            <View style={{ width:'80%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
              <View style={{ justifyContent: 'center', }}>
                <Text style={{ fontSize: widthp('3.7%'), marginBottom: 10, fontFamily: 'Poppins-Bold' }}>{name + ' ' + last_name}</Text>
                <Text style={{ fontSize: widthp('3.7%'), fontFamily: 'Poppins-Regular' }}>{college_name}</Text>
                <Text style={{ fontSize: widthp('3.7%'), fontFamily: 'Poppins-Regular' }}>{city + ', ' + state}</Text>
                <Text>{country}</Text>
              </View>
              <View>
                  <UserAvatar size={widthp('20%')} name={name + ' ' + last_name} source={profile} />
                {/* <View style={{ overflow: 'hidden', height: 100, width: 100, backgroundColor: '#000', borderRadius: 100 }}>
                
                </View> */}
              </View>


            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate(routeconst.AmbassaderProfile, { id: id })} style={[styles.btn, { backgroundColor: '#A9EF90' }]}>
                <View>
                  <Text style={[styles.btntext, { fontSize: widthp('4.5%') }]}>Contact Me</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    </>
  );
}
