import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity as To } from 'react-native';

const Badges = ({ tag,color,fontcolor }) => {
    const colors = '#2596be'
    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15, margin: 10, backgroundColor: color ? color : colors, borderRadius: 5 }}>
                <Text style={{ color: fontcolor? fontcolor : '#fff' }}>{tag}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default Badges;
