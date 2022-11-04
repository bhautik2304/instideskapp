import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { college1,default_unilogo } from '../../assets/index';
import routeconst from '../../constants/routeconst';
import { widthp } from '../../Utils/Responsive';
const CollegesCard = ({ routes,data,navigation,width }) => {
    const { university_id,university_name, uni_logo, address,city_name,state_name, country } = data
    // console.log({logo:'https://gocoolgroup.com/crmportal/'+uni_logo,uniid:university_id})
    return (
        <>
            <TouchableOpacity onPress={()=>navigation.navigate(routeconst.CollegeProfile,{id:university_id})}>
                <View style={[styles.card,styles.shadowProp,{margin:20,width:width? width : 300}]}>
                    <View style={[styles.row]}>
                        <View style={{ width: '50%', height: 130, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={uni_logo ? {uri:'https://gocoolgroup.com/crmportal/'+uni_logo} : default_unilogo} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                        </View>
                        <View style={{ width: '50%', height: 130, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0D77AB', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: widthp('3%'), }}>{university_name}</Text>
                            <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: widthp('3%'), }}>{country}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#0D77AB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 25,
    },
    btntext: {
        color: '#fff',
    },
    marginy_15: {
        marginHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
    },
    center: {
        alignItems: 'center',
    },
    card: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 15,
    },
    justifyContentbetwin: {
        justifyContent: 'space-between',
    },
    cardv: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    cardht: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: '#3f3f3f'
    },
    poppins_regular: {
        fontFamily: 'Poppins-Regular',
    },
    font_14: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3f3f3f'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 10,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#171717',
    },
})

export default CollegesCard;
