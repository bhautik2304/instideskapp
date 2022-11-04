import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import route from '../../constants/routeconst';
const Bootamtab = ({ navigation }) => {

  return (
    <View style={{
      height: 70,
      width: '100%',
      padding: 10,
      backgroundColor: '#fff',
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
        <TouchableOpacity onPress={() => navigation.navigate(route.home)}>
          <View style={{ alignItems: 'center', paddingVertical: 3 }}>
            <FontAwesome style={{ margin: 5 }} name="home" size={18} color={'#000'} />
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(route.finer)}>
          <View style={{ alignItems: 'center', paddingVertical: 3 }}>
            <FontAwesome style={{ margin: 5 }} name="book" size={18} color={'#000'} />
            <Text>Courses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(route.profile)}>
          <View style={{ alignItems: 'center', paddingVertical: 3 }}>
            <FontAwesome5 style={{ margin: 5 }} name="bars" size={20} color={'#000'} />
            <Text>Menu</Text>
          </View>
        </TouchableOpacity>
        {/* <Text>Bootamtab</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Bootamtab;
