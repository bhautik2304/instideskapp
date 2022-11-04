import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { Instilogo } from "../../assets";

const Appheader = ({ navigation }) => {
  const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)
  const styles = StyleSheet.create({
    hedercontainer: {
      backgroundColor: backgrond,
      height: 50,
      width: "100%",
      paddingHorizontal: 10,
    },
    dflex: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: backgrond,
      padding: 8
    },
  });
  return (
    <>
      <View style={styles.hedercontainer}>
        <View style={styles.dflex}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="left" size={20} color={"#fff"} />
          </TouchableOpacity>
          <Instilogo height={18} width={100} />
        </View>
      </View>
    </>
  );
};



export default Appheader;
