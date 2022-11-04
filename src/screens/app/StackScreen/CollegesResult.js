import React,{useState} from 'react';
import {View, StyleSheet,ScrollView} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Textinput,Screen,Homeheader,CollegesCard } from '../../../components';
import { widthp } from '../../../Utils/Responsive';

const CollegesResult = ({navigation}) => {
    const [search, setSearch] = useState('');
    const { colleges } = useSelector((state) => state.colleges)
    const [data, setData] = useState();
    const { fontColor, backgrond, iconcolor } = useSelector((state) => state.themeMode.theme)
    const searchColleges=(e)=>{
        setSearch(e)
         const datas= colleges.filter((list)=>list.university_name.toUpperCase().includes(search.toUpperCase()))
         setData(datas)
    }
    return (
        <Screen navigation={navigation} backgrond={'#0D77AB'} header={true} >
        {/* <Homeheader navigation={navigation} logo userinfo/> */}
          <View style={styles.container}>
            <View style={{ backgroundColor: backgrond, alignItems: 'center',width:'80%' }}>
              <Textinput onchang={searchColleges} placeholder={'Serch Colleges'} fullwidth />
            </View>
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, styles.homedwd]}>
            <View style={{ borderBottomWidth: 5, width: '8%', borderColor: '#3F3F3F', borderRadius: 50, marginVertical: 10 }}></View>
            {data ? 
            data.map((data) => <CollegesCard key={data.university_id} width={widthp('95%')} navigation={navigation} data={data} />)
            :
              colleges.slice(0,30).map((data) => <CollegesCard width={widthp('95%')} key={data.university_id} navigation={navigation} data={data} />)
             }
          </View>
        </ScrollView>
      </Screen>
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

export default CollegesResult;
