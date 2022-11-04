import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Text, TouchableOpacity, StatusBar,Image } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button } from '../../components/index';
import { useSelector, useDispatch } from "react-redux";
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Fa from "react-native-vector-icons/FontAwesome5";
import SelectList from 'react-native-dropdown-select-list'
import {fcs} from '../../assets';
import { widthp ,heightp} from '../../Utils/Responsive';
const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const Finder = ({ navigation }) => {
  const [filter, setFilter] = useState(true);
  const [card, setCard] = useState(false);
  const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)

  return (
    <>
      {/* <StatusBar backgroundColor={'#f8f8f8'} /> */}
      <Screen navigation={navigation} backgrond={'#0D77AB'} bootamtab={true} >
        <Homeheader navigation={navigation} userinfo logo />
          <View style={styles.container}>
            <View style={{ backgroundColor: backgrond, alignItems: 'center' }}>
              {/* Serch Bar design */}
              <SearchBox onPress={() => {
                setFilter(!filter)
                // setCard(!card)
              }
              } />  
            </View>
          </View>
          <View style={[styles.container, styles.homedwd]}>
            <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 10 }}></View>
            <View style={{width:'100%',height:heightp('80%'),backgroundColor:'#f8f8f8'}}>
              <Image source={fcs} resizeMode='center' style={{height:'100%',width:'100%'}}/>
            </View>
          </View>
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

export default Finder;

const SearchBox = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} >
        <View style={{ height: 50, width: '100%', marginRight: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '90%', height: '80%', borderRadius: 10, backgroundColor: '#D9D9D9', paddingHorizontal: 10, justifyContent: 'center' }}>
            <Text>Search Courses</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ width: '80%', borderBottomWidth: 1, marginVertical: 20 }}>

      </View>
    </>
  )
}

const CorsesFilter = ({ onPress }) => {
  return (
    <View style={{ width: '90%', backgroundColor: '#fff', padding: 20, paddingHorizontal: 30, borderRadius: 20 }} >
      <Text style={{ color: '#000', fontSize: 15, fontFamily: 'Poppins-Bold', marginBottom: 10 }}>Start Searching Courses</Text>
      <Text style={{ color: '#000', fontFamily: 'Poppins-Regular', margin: 15 }}>Country</Text>
      <Selectlist />
      <Text style={{ color: '#000', fontFamily: 'Poppins-Regular', margin: 15 }}>State</Text>
      <Selectlist />
      <Text style={{ color: '#000', fontFamily: 'Poppins-Regular', margin: 15 }}>College / University</Text>
      <Selectlist />
      <View style={{ marginTop: 20 }}>
        <Button title={'Find Courses'} btntxtcolor={'#000'} color={'#A9EF90'} onPress={onPress} />
      </View>
    </View>
  );
}

const Selectlist = ({ placeholder, }) => {
  const [selected, setSelected] = useState("");

  const data = [{ key: '1', value: 'Jammu & Kashmir' }, { key: 2, value: 'Vadodara' }];
  return (
    <>
      <View style={{ width: '100%' }}>
        <SelectList placeholder={placeholder} boxStyles={{ borderWidth: 0, height: 40, backgroundColor: '#D9D9D9' }} setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
      </View>
    </>
  )
}

const CoursesCard = ({ data }) => {
  // const {college,}=data
  return (
    <>
      <TouchableOpacity>
        <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 15, padding: 10, marginVertical: 15 }}>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ padding: 5, width: '80%' }}>
              <Text style={{ marginBottom: 5, fontFamily: 'Poppins-Bold', fontSize: widthp('3.5%') }}>UNIVERSITY</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>La Trobe College-NEW SOUTH WALES</Text>
              </View>
            </View>
            <View>
              <Fa name='graduation-cap' color={'red'} size={30} style={{ marginRight: 15 }} />
            </View>
          </View>

          <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ margin: 10 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>COURSE NAME</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>D2D Engineering</Text>
            </View>
            <View style={{ margin: 10 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>CREDENTIALS</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>BACHELOR</Text>
            </View>
            <View style={{ margin: 10 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>Min IELTS</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>6.0 - 5.5</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const Noresult = () => {
  return (
    <>
      <View style={{ width: '100%', paddingHorizontal: 15, marginVertical: 20 }}>
        <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
          <View style={{ width: '100%', borderRadius: 20, justifyContent: 'center', paddingHorizontal: 30 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Mateicon name='close-circle-outline' style={{ marginRight: 15, marginVertical: 10 }} size={80} color={'red'} />
              <>
                <Text style={{ fontWeight: 'bold', fontSize: widthp('5%'), color: '#000' }}>No Courses Available</Text>
              </>
            </View>
            <View style={{ width: '100%',height:335 }}>

            </View>
          </View>
        </View>
      </View>
    </>
  )
}