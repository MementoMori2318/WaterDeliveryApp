import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import WaterCategory from './custom-made/WaterCategory';

const {height, width} = Dimensions.get('window')
export default function Home(){
    return(
       <SafeAreaView style={styles.container}>
        <ScrollView scrollEventThrottle={16}>
            <View style={styles.scrollContainer}>
                
                <Text style={styles.scrollTitle}>What is it that you need?</Text>

                <View style={styles.scroll}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <WaterCategory imageUri={require('../assets/1.png')}
                      name="Blue 19 liter"/>
                      <WaterCategory imageUri={require('../assets/2.png')}
                      name="Blue 20 liter"/>
                      <WaterCategory imageUri={require('../assets/3.png')}
                      name="Mineral water 1 liter"/>
                      <WaterCategory imageUri={require('../assets/4.png')}
                      name="Mineral water 6 liter"/>
                      <WaterCategory imageUri={require('../assets/5.png')}
                      name="Mineral water 12 liter"/>
                    </ScrollView>
                </View>
                <View style={styles.description}>
                    <Text style={{fontSize: 20, fontWeight:'700'}}>
                        Water delivery apps
                    </Text>
                    <Text style={{ marginTop: 10}}>
                        can be a convenient way for people to access clean, safe drinking water,
                        especially if they live in an area where access to clean water is limited.
                    </Text>
                    <View style={styles.descriptionImage}>
                        <Image style={styles.imaged} source={require('../assets/6.png')}/>
                    </View>
                </View>
            </View>
        </ScrollView>
       </SafeAreaView> 
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    scrollContainer:{
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FFFFFF'
    },
    scrollTitle: {
        fontSize: 25,
        color: "blue",
        alignSelf: "center",
        fontWeight: '700',
        paddingHorizontal: 20,
    },
    scroll: {
        height: 250,
        marginTop: 20,
    },
    description:{
        marginTop: 20,
        paddingHorizontal: 20,
    },
    descriptionImage:{
        width:width-40,
        height:270,
        marginTop: 20,
    },
    imaged: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderColor: '#DDD',
        borderWidth: 1,
    }
    

})