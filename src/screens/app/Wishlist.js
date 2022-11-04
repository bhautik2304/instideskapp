import React from 'react';
import { View, StyleSheet, ScrollView, Text,StatusBar } from 'react-native';
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Ant from "react-native-vector-icons/AntDesign";
import {Card} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { Homeheader, Screen } from '../../components/index';
import { s, vs, ms, mvs } from 'react-native-size-matters';
const Wishlist = ({ navigation }) => {
  const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)
  return (
    <>
    <Screen navigation={navigation} backgrond={'#f8f8f8'} iccolr='#000' header={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: backgrond }}>
          <Homeheader userinfo logo />
          <View style={{ padding: 10, width: '100%', color: fontColor }}>
            {/* <Text style={{ color: '#424242', fontFamily: 'Poppins', fontWeight: '500', fontSize: 30 }}>Your Wishish</Text> */}
            <ScrollView style={{ paddingVertical: 10 }}>
            
              <View style={{ width: '100%', paddingHorizontal: 15, marginVertical: 20 }}>
                <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
                  <View style={{ width: '100%', borderRadius: 20, justifyContent: 'center', paddingHorizontal: 30}}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Mateicon name='close-circle-outline' style={{ marginRight: 15, marginVertical: 10 }} size={80} color={'red'} />
                      <>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>Nothing In Your Wishlist</Text>
                      </>
                    </View>

                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({})

export default Wishlist;
