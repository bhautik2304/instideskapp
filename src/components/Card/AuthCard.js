import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity ,Dimensions} from 'react-native';
import Mateicon from "react-native-vector-icons/MaterialCommunityIcons";
import routeconst from '../../constants/routeconst';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { heightp, widthp } from '../../Utils/Responsive';

const AuthCard = ({navigation}) => {
    return (
        <>
            <View style={[styles.card, { marginVertical: 10}]}>
                <View style={[styles.center,{marginVertical:20}]}>
                    <Mateicon name='close-circle-outline' style={{ marginRight: 15, marginVertical: 0 }} size={vs(40)} color={'red'} />
                    <View>
                    <Text style={[styles.poppins_regular, {fontSize:widthp('4%')}]}>Please Login or Register To Continue</Text>
                    </View>
                </View>
                <View style={[styles.center, { marginTop: 2, paddingHorizontal: 10 }]}>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(routeconst.login)}>
                        <View>
                            <Text style={[styles.btntext,{fontSize:widthp('4%')}]} >Login</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate(routeconst.detail)}>
                        <View>
                            <Text style={[styles.btntext,{fontSize:widthp('4%')}]} >Register</Text>
                        </View>
                    </TouchableOpacity> */}
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
        padding: 5,
        borderRadius: 10,
        paddingHorizontal: 25,
    },
    btntext: {
        color: '#fff',
        fontSize: vs(12),
        marginVertical: 6,
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
        borderRadius: 10,
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
        fontFamily: 'Poppins-Bold',
        fontSize: vs(13),
        color: '#3f3f3f'
    },
    poppins_regular: {
        fontFamily: 'Poppins-Regular',
    },
    font_14: {
        // marginVertical: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3f3f3f'
    }
})

export default AuthCard;
