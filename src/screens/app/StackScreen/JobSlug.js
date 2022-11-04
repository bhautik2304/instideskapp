import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import { useSelector } from "react-redux";
import { Pending, Banner1, Banner2, college1, college2, college3, college4, addban } from "../../../assets";
import { ApplicationStatusCard, Button, CollegesCard, Homeheader, Screen, Textinput } from "../../../components";
import { s, vs, ms, mvs } from 'react-native-size-matters';

import routeconst from "../../../constants/routeconst";

const dtaforcard = [{
  name: 'Duhram College',
  address: 'Whitby, ON, Canada',
  img: college1
},
{
  name: 'Conestoga College',
  address: 'Ontario, Canada',
  img: college2
},
{
  name: 'Uni. Of Waterloo',
  address: 'Ontario, Canada',
  img: college3
},
{
  name: 'Canadore College',
  address: 'Ontario, Canada',
  img: college4
}
]

const adress = [{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEO6lgxiQT69ajKcGCHdFkXWwrhA-F0Nv1ng&usqp=CAU',
  address: '22 shupushpak Ellora park ,vadodara ,gujarat 390023',
  name: 'Vadodra'
}]
const tag = ['Canada', 'Australia', 'United Kingdom', 'United States', 'Europe']


const JobSlug = ({navigation}) => {
    return (
        <View>
            <Screen navigation={navigation} backgrond={'#0D77AB'} header={true} >
            {/* <Homeheader navigation={navigation} logo userinfo/> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          
        </ScrollView>
      </Screen>
        </View>
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
    }
  });

export default JobSlug;
