import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import FontIcon from "react-native-vector-icons/FontAwesome";
import UserAvatar from 'react-native-user-avatar';
import { Instilogo, DarkLogo, avatar } from '../../../assets';
import { swichMode } from '../../../Redux/Slice/themeslice';
import { useTheme, Themmode } from '../../../Theme/';
import route from '../../../constants/routeconst';
import { widthp } from '../../../Utils/Responsive';
import Icon from 'react-native-vector-icons/AntDesign';

const Homeheader = ({ logo, userinfo, navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const user = useSelector((state) => state.authUser.auth)
  const userStatus = useSelector((state) => state.authUser.authStatus)


  const dispatch = useDispatch()

  const { fontColor, background, iconcolor } = useSelector((state) => state.themeMode.theme)
  const toggleSwitch = () => {
    dispatch(swichMode(useTheme(isEnabled, Themmode)))
    setIsEnabled(previousState => !previousState);
  }

  const Logos = () => isEnabled ? <DarkLogo /> : <LightLogo />
  return (
    <>
      <View style={{ width: '100%', padding: 15, backgroundColor: background }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Instilogo height={18} width={100} />
          <View>
            {
              userStatus ? (<>
                <TouchableOpacity onPress={() => navigation.navigate(route.StudentProfile)}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 6, fontFamily: 'Poppins-Bold', fontSize: widthp('4.5%'), color: "#fff", marginHorizontal: 15 }}>Hello {user.first_name}</Text>
                    <UserAvatar style={{borderWidth:1,borderColor:'#fff'}} bgColor="#0D77AB"  size={widthp('10%')} name={user.first_name + ' ' + user.last_name} />
                  </View>
                </TouchableOpacity>
              </>) : (<>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => navigation.navigate(route.login)}>
                    <Text style={{ fontSize: widthp('4.3%'), color: '#ffff' }}>Login</Text>
                  </TouchableOpacity>
                  {/* <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#ffff', marginHorizontal: 10 }}>|</Text> */}
                  {/* <TouchableOpacity onPress={() => navigation.navigate(route.detail)}>
                    <Text style={{ fontSize: widthp('4.3%'), color: '#ffff' }}>Register</Text>
                  </TouchableOpacity> */}
                </View>
              </>)
            }
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dflex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: 8
  },
})

export default Homeheader;
