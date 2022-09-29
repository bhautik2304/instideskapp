import React from "react";
import { View, StyleSheet,Text } from "react-native";
import FontIcon from "react-native-vector-icons/FontAwesome";
const Bootamtab = () => {
  return (
    <View style={{
        height:70,
        width:'100%',
        padding:15,
        backgroundColor:'#fff',
        borderTopEndRadius:30,
        borderTopStartRadius:30,
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 100,
        width: "100%",
      }}
    >
      <FontIcon style={{margin:5}} name="user-circle" size={30} color={'#000'}/>
      <FontIcon style={{margin:5}} name="user-circle" size={30} color={'#000'}/>
      <FontIcon style={{margin:5}} name="user-circle" size={30} color={'#000'}/>
      <FontIcon style={{margin:5}} name="user-circle" size={30} color={'#000'}/>
      {/* <Text>Bootamtab</Text> */}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Bootamtab;
