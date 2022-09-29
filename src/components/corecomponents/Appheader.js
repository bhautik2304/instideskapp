import React from "react";
import { View, StyleSheet } from "react-native";
import { Logo, LeftIcon } from "../../assets/index";
import Icon from 'react-native-vector-icons/FontAwesome';
import Bag from "../../assets/icon/Bag";

const Appheader = ({ background, icon }) => {
    const styles = StyleSheet.create({
        hedercontainer: {
          backgroundColor: background,
          height: 50,
          width: "100%",
          paddingHorizontal: 20,
        },
        dflex: {
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor: background,
          padding:8,
        },
      });
  return (
    <>
      <View style={styles.hedercontainer}>
        <View style={styles.dflex}>
          <Icon name="arrow-circle-left" size={30} />
        </View>
      </View>
    </>
  );
};



export default Appheader;
