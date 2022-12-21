import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function WaterCategory({ imageUri, name }) {
  return (
    <View style={{height: 250, width: 200, marginLeft: 20, borderWidth:0.5, borderColor:'#dddddd'}}>
    <View style={{flex: 2}}>
        <Image style={styles.image} source={imageUri}/>
    </View>
    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
        <Text style={styles.name} >{name}</Text>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },  
    name:{
        fontWeight: "500",
        fontSize: 20,
    },


});