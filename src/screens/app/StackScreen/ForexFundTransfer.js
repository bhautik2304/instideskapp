import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, TouchableOpacity, StatusBar,Image } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button } from '../../../components/index';
import { useSelector, useDispatch } from "react-redux";
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Fa from "react-native-vector-icons/FontAwesome5";
import SelectList from 'react-native-dropdown-select-list'
import {fcs} from '../../../assets';
import { widthp ,heightp} from '../../../Utils/Responsive';

const ForexFundTransfer = ({navigation}) => {
    const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)

    return (
      <>
        {/* <StatusBar backgroundColor={'#f8f8f8'} /> */}
        <Screen navigation={navigation} backgrond={'#0D77AB'} header={true} >
          {/* <Homeheader navigation={navigation} userinfo logo /> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={{ backgroundColor: backgrond, alignItems: 'center' }}>
                {/* Serch Bar design */}
              </View>
            </View>
            <View style={[styles.container, styles.homedwd]}>
              <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 10 }}></View>
              <View style={{width:'100%',height:heightp('80%'),backgroundColor:'#f8f8f8'}}>
                <Image source={fcs} resizeMode='center' style={{height:'100%',width:'100%'}}/>
              </View>
            </View>
          </ScrollView>
        </Screen>
        
      </>
    );
  }
  
  const styles = StyleSheet.create({
  
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
export default ForexFundTransfer;
