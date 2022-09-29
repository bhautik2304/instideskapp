import React from 'react';
import {View, StyleSheet,StatusBar,ScrollView} from 'react-native';
import Appheader from "./Appheader";
import Bootamtab from './Bootamtab';
const Screen = ({navigation,backgrond,children,header,bootamtab,...props}) => {
    return (
        <>
           <StatusBar backgroundColor={backgrond} />
        <View style={[{flex:1,flexDirection:'column',justifyContent:'space-between'},{...props}]} >
        {header? <Appheader background={backgrond} /> : null }
            {children}
         <Bootamtab />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    
})

export default Screen;
