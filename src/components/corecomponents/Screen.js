import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Appheader from "./Appheader";
import Bootamtab from './Bootamtab';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const Screen = ({ navigation, children, backgrond, header, bootamtab, ...props }) => {
    const { fontColor, themebackgrond, iconcolor } = useSelector((state) => state.themeMode.theme)
    return (
        <>
            <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: backgrond ? backgrond : themebackgrond }, { ...props }]} >
                <StatusBar backgroundColor={"#0D77AB"} currentHeight={1} barStyle='leight-content' />
                {header ? <Appheader navigation={navigation} /> : null}
                {children}
                {/* <Bootamtab navigation={navigation} /> */}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
barstyle:{
    height: 20,
}
})

export default Screen;
