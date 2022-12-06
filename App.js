import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Navigator from './app/routes/drawer';

export default function App() {
  
  
  return (
  
   <Navigator />
   
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
},
});
