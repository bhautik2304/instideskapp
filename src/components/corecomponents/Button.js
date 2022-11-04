import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { widthp } from '../../Utils/Responsive';

const Button = ({ onPress, title,color,fullwidth,width,btntxtcolor,...props }) => {
    return (
        <>
            <TouchableOpacity {...props} style={[styles.btn,{ backgroundColor: color,width:fullwidth? '100%': width,}]} onPress={onPress}>
                <View>
                    <Text style={[styles.btntext,{color:btntxtcolor}]}>{title}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        fontWeight: 'bold',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    btntext: {
        fontWeight: 'bold',
        fontSize: widthp('4%'),
    },
})

export default Button;
