import React from 'react';
import {View, StyleSheet} from 'react-native';

const Jobcard = () => {
    return (
        <>
            
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
    }
})

export default Jobcard;
