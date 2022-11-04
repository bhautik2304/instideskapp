import React from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView, Image, TouchableOpacity as To } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { useDispatch, useSelector } from 'react-redux';

import { heightp, widthp } from '../Utils/Responsive';

const Card = ({ data }) => {
  const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)
  const { image, name, address } = data
  return (
    <>
      <View style={{
        width: 300,
        borderRadius: 15,
        margin: 10,
      }}>
        <To>
          <Image
            source={image}
            style={{
              height: 150,
              width: 300,
              borderRadius: 10,
              backgroundColor: '#fff'
            }}
            resizeMode="contain"
          />
        </To>
        <View style={{ flexDirection: 'row', marginTop: 7, paddingHorizontal: 10, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular' }}>{name}</Text>
            <Text style={{ fontSize: widthp('14%'), fontFamily: 'Poppins-Regular' }}>{address}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Octicons style={{ margin: 10 }} name="star-fill" size={20} color={'#F0C835'} />
            <Text>3.5</Text>
          </View>
        </View>
        <View style={{ margin: 15 }}>
        </View>
        <View style={{ flex: 1, }}>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({})

export default Card;
