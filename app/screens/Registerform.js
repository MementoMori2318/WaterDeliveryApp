import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Register_Button from './custom-made/Register_Button';



export default function Registerform() {
  


  return (
   
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        
          <View style={styles.inputView}>
          <TextInput 
          placeholder='Name'
          placeholderTextColor= '#FFFFFF'
          style={styles.input}/>
          </View>

          <View style={styles.inputView}>
          <TextInput 
          placeholder='Email'
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

          <View style={styles.inputView}>
          <TextInput 
          placeholder='Re-Password'
          placeholderTextColor= '#FFFFFF'
          secureTextEntry={true}
          style={styles.input}/>
          </View>
          
          <Register_Button />
          
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF", 
    },  
    input: {
      padding: 15,
      margin: 15,
      width: 350,
      borderRadius: 20,
      fontSize: 18,
      backgroundColor: "#72A0D5",
      color: "#FFFFFF",
    },
        


});
