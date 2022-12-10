import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Canadaflag } from "../../assets/index";
import routeconst from '../../constants/routeconst';
import { heightp, widthp } from '../../Utils/Responsive';
import Badges from '../Badges';
import Button from '../corecomponents/Button';

const ApplicationStatusCard = ({route,navigation, status,data,id }) => {
    const statu=(status == 'Defer  Intake')
    return (

        <>
            <View style={[styles.card, { marginVertical:10, borderColor: 'green'}]}>
                <View style={[styles.justifyContentbetwin, styles.center, styles.row, { margin:10 }]}>
                    <Text style={{ color: 'green', fontSize: widthp('3%'), fontFamily: 'Poppins-Bold' }}>{status}</Text>
                    <View>
                        <Text style={styles.cardht} >Visa Application </Text>
                    </View>
                </View>
                <View style={[styles.row, styles.center]}>
                    <View>
                        <View style={{ overflow: 'hidden', height: 50, width: 50, backgroundColor: '#fff', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Canadaflag height={60} width={60} />
                        </View>
                    </View>
                    <View style={styles.marginy_15}>
                        <Text style={[styles.poppins_regular, styles.font_14]}>{data.university_name}</Text>
                        <Text style={{fontSize:widthp('3.8%')}}>{data.country_name}</Text>
                    </View>
                </View>
                <View style={[styles.justifyContentbetwin, styles.center, styles.row, { marginTop: 2, paddingLeft: 50 }]}>
                    <Text style={{ color: 'red', fontSize: widthp('3.8%'), fontFamily: 'Poppins' }}></Text>
                    <TouchableOpacity onPress={()=>navigation.navigate(routeconst.VisaAplication,{id:id})} style={styles.btn}>
                        <View>
                            <Text style={styles.btntext} >Show More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderLeftWidth: 10,
        padding: 10,
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
        fontSize: widthp('3.8%'),
        color: '#3f3f3f'
    },
    poppins_regular: {
        fontFamily: 'Poppins-Regular',
    },
    font_14: {
        fontSize: widthp('3.8%'),
        fontWeight: 'bold',
        color: '#3f3f3f'
    }
})

export default ApplicationStatusCard;
