import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Login_Button from './custom-made/Login_Button';

export default function LoginForm(props) {
  return (
    
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
          
          <View style={styles.inputView}>
          <TextInput 
          placeholder='Username'
          placeholderTextColor= '#FFFFFF'
          style={styles.input}/>
          </View>

          <View style={styles.inputView}>
          <TextInput 
          placeholder='Password'
          placeholderTextColor= '#FFFFFF'
          secureTextEntry={true}
          style={styles.input}/>
          </View>

          <Login_Button />

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#cde4f5",
    },  
    logo: {
      width: 145,
      height: 145,
  },
  logocontainer: {
      position: "absolute",
      top: 50,
      alignItems: "center",
  },
  logotitle: {
      color: "black",
      fontSize: 30,
      fontWeight: "500",
  },
  input: {
    padding: 15,
    margin: 15,
    width: 350,
    borderRadius: 1,
    fontSize: 18,
    backgroundColor: "#72A0D5",
    color: "#FFFFFF",
  },
});
