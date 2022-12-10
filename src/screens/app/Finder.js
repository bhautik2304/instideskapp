import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet,FlatList, ScrollView,Linking, Switch, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Homeheader, Screen, Textinput, Card, Button } from '../../components/index';
import { useSelector, useDispatch } from "react-redux";
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import Fa from "react-native-vector-icons/FontAwesome5";
import SelectList from 'react-native-dropdown-select-list'
import { fcs } from '../../assets';
import { widthp, heightp } from '../../Utils/Responsive';
import { Modal, Select, Box, CheckIcon } from "native-base";
import axios from 'axios';
import { addCources } from '../../Redux/Slice/courcesSlice';
import { widthPercentageToDP } from 'react-native-responsive-screen';
// import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";

const Finder = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [filter, setFilter] = useState(true);
  const [card, setCard] = useState(false);
  const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)

  const {cources,stateUpdate} = useSelector((state) => state.cources)
console.log(stateUpdate);

  return (
    <>
      {/* <StatusBar backgroundColor={'#f8f8f8'} /> */}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <CorsesFilter />
      </Modal>
      <Screen navigation={navigation} backgrond={'#0D77AB'} bootamtab={true} >
        <Homeheader navigation={navigation} userinfo logo />
        <View style={styles.container}>
          <View style={{ backgroundColor: backgrond, alignItems: 'center' }}>
            {/* Serch Bar design */}
            <SearchBox onPress={() => {
              setModalVisible(!modalVisible);
            }}
            />
          </View>
        </View>
        <View style={[styles.container, styles.homedwd]}>
          <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 10 }}></View>
          <View style={{height: heightp('70%'),backgroundColor: '#F8F8F8',width:'100%',justifyContent: 'center', alignItems: 'center',paddingHorizontal:10}}>
          {/* <ScrollView style={{  }}> cources.map((_,k)=><CoursesCard key={k} />)*/}
            {stateUpdate ? 
            <FlatList
              data={cources}
              renderItem={CoursesCard}
              // keyExtractor={item => item.id}
            />
             : <Text>No data Found</Text>}
          {/* </ScrollView> */}
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
    backgroundColor: '#F8F8F8',
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
  // setSelected={setSelected} data={data} onSelect={() => alert(selected)}
  const [stateShow, setStateShow] = useState(false);
  const [univerShow, setUniverShow] = useState(false);

  const [stateId, setStateId] = useState('');
  const [CountryId, setCountryId] = useState('');
  const [universityId, setuniversityId] = useState('');

  const [stateData, setStatedata] = useState([]);
  const [univerData, setUniverdata] = useState([]);

  const states = useSelector((state) => state.state.state)
  const country = useSelector((state) => state.country.country)
  const university = useSelector((state) => state.colleges.colleges)

  const dispatch=useDispatch()

  const countrys = country.map((data) => ({ id: data.country_id, value: data.country }))


  const statefind = (id) => {
    setCountryId(Number(id))
    const statedata = states.filter((data) => Number(data.country_id) == Number(id))
    const state = statedata.map((data) => ({ id: data.state_id, value: data.state_name }))
    setStatedata(state)
    setStateShow(true)
    console.log(university)
  }

  const univerfind = (id) => {

    setStateId(Number(id))
    
    const univerfinds = university.filter((data) => Number(data.state_id) == Number(stateId) && Number(data.country_id) == Number(CountryId))
    const uni = univerfinds.map((data) => ({ id: data.university_id, value: data.university_name }))
    setUniverdata(uni)
    setUniverShow(true)
    // console.log(uni)
  }
  
  const allFilterCource=()=>{
    // alert('msg');``
    const url='https://gocoolgroup.com/api/course-details.php?token=70f1063ca2ae497bb9425a852683545b&'+'university='+universityId
    console.log(url)
    axios.get(url).then(e=>{
      dispatch(addCources(e.data.data)) 
      // console.log(e.data)
    })
  }

  const data = ['vadodara']
  return (
    <View style={{ width: '90%', backgroundColor: '#fff', padding: 20, paddingHorizontal: 30, borderRadius: 20 }} >
      <Text style={{ color: '#000', fontSize: 15, fontFamily: 'Poppins-Bold', marginBottom: 10 }}>Start Searching Courses</Text>
      <Text style={{ color: '#000', fontFamily: 'Poppins-Regular', margin: 15 }}>Country</Text>
      <Selectlist data={countrys} onvalue={(e) => statefind(e)} />
      {stateShow && <>
        <Text style={{ color: '#000', fontFamily: 'Poppins-Regular', margin: 15 }}>State</Text>
        <Selectlist data={stateData} onvalue={(e) => univerfind(e)} />
      </>
      }
      {univerShow ? <>
        <Text style={{ color: '#000', fontFamily: 'Poppins-Regular', margin: 15 }}>College / University</Text>
        <Selectlist data={univerData} onvalue={(e)=>setuniversityId(Number(e))} />
      </> : null}
      <View style={{ marginTop: 20 }}>
        <Button title={'Find Courses'} btntxtcolor={'#000'} color={'#A9EF90'} onPress={allFilterCource} />
      </View>
    </View>
  );
}

const Selectlist = ({ service, onvalue, data, placeholder, ...props }) => {

  // setSelected={setSelected} data={data} onSelect={() => alert(selected)}
  return (
    <>
      <View style={{ width: '100%' }}>
        <Select variant='outline' selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5"
          // onValueChange={onvalue}
          />
        }} mt={1} onValueChange={onvalue}>
          {data.map((e, i) => <Select.Item key={i} label={e.value} value={e.id} />)}
        </Select>
      </View>
    </>
  )
}

const CoursesCard = ({ item }) => {
  // const {college,}=item
  return (
    <>
      <TouchableOpacity>
      {}
        <View style={{ elevation: 5,shadowColor: '#171717', width: widthPercentageToDP('95%'), backgroundColor: '#fff', borderRadius: 10, padding: 10, marginVertical: 15 ,borderLeftWidth: 16,borderColor:'#1C3C63'}}>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ padding: 5, width: '80%' }}>
              <Text style={{ marginBottom: 5, fontFamily: 'Poppins-Bold', fontSize: widthp('3.5%') }}>{item.university_name}</Text>
              <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>Campus : </Text>
                <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>{item.campusname}</Text>
              </View>
            </View>
            <View>
              <Fa name='graduation-cap' color={'#0D77AB'} size={30} style={{ marginRight: 15 }} />
            </View>
          </View>

            <View style={{ margin: 5 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>COURSE NAME</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>{item.course_name}</Text>
            </View>
          <View style={{ width: '75%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ margin: 5 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>CREDENTIALS</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>{item.course_type_name}</Text>
            </View>
            <View style={{ margin: 5 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>Min IELTS / PTE</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>{item.not_less_than_ielts}</Text>
            </View>
          </View>
          <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ margin: 5 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>Length</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>{item.course_type_name}</Text>
            </View>
            <View style={{ margin: 5 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>Application Fees</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>{item.not_less_than_ielts}</Text>
            </View>
          </View>
          <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ margin: 5 }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: widthp('3%') }}>Course Link</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: widthp('3%') }}>{item.course_type_name}</Text>
            </View>
            <View style={{ margin: 5 }}>
            </View>
          </View>
          <View style={{width:'100%'}}>
              <Button title={'Contact Us'} onPress={() => Linking.openURL('https://wa.me/+919824452328')} color="#0D77AB" fullwidth={true} btntxtcolor="#fff" />
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
            <View style={{ width: '100%', height: 335 }}>

            </View>
          </View>
        </View>
      </View>
    </>
  )
}

// Filter parameter
// 	●	id
// 	●	
// 	●	city
// 	●	
// 	●	
// 	●	university_course
// 	●	not_less_than
// 	●	over_all
// 	●	keyword
// 	●	course_type
// 	●	subcategory
