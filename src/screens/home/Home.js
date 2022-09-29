import React from "react";
import { View, StyleSheet, Text, StatusBar,ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Screen } from "../../components";

const Home = ({ navigation }) => {
  return (
    <>
      <Screen navigation={navigation} backgrond={'#fff'} header={true} bootamtab={true} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image 
          style={{height:500,width:'100%'}}
          source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }} />
        <Image 
          style={{height:500,width:'100%'}}
          source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }} />
        </ScrollView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
