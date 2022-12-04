import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Navigator from './app/routes/welcome_loginStack';

export default function App() {
  const image = { uri: "../assets/logo3.png" };
  
  return (
    <ImageBackground source={image} style={styles.image}>
   <Navigator />
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
},
});
