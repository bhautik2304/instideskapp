import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const CenterCardSlice = ({ address }) => {
  const { img, name, adrees } = address
  return (
    <>
      <View style={{ padding: 10, height: 100, backgroundColor: '#f0f0f0', borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ overflow: 'hidden', height: 70, width: 70, backgroundColor: '#000', borderRadius: 100 }}>
          <Image style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: img }} />
        </View>
        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          <View style={{ flexDirection: 'row', width: 200 }}>
            <Text style={{ flexShrink: 1 }}>
              {adrees}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({})

export default CenterCardSlice;
