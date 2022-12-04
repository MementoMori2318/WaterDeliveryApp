import React from 'react';
import { Image, SafeAreaView, StyleSheet, View,  Text, Button, ImageBackground} from "react-native";
import LoginButton from '../loginbutton';
import RegisterButton from '../registerbutton';

export default function WelcomeScreen({navigation}) {

    
    const pressLogin = () => {
        navigation.navigate('Login')
    }
    const pressRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground  source={require("../assets/logo2.png")}  resizeMode="cover"  style={styles.image}>
                <View style={styles.buttoncontainer} navigation>
                    <LoginButton text='Login' onPress={pressLogin}/>
                </View>
                <View style={styles.buttoncontainer}>
                    <RegisterButton text='Register' onPress={pressRegister}/>
                </View>
            </ImageBackground>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cde4f5",
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
    buttoncontainer: {
        marginBottom: 20,
    },
   
})

export {WelcomeScreen};