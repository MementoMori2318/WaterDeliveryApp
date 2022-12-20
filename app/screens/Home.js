import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Keyboard, SafeAreaView, ScrollView } from 'react-native';

export default function Home(props){
    return(
       <SafeAreaView style={styles.container}>
        <ScrollView scrollEventThrottle={16}>
            <View style={styles.scrollContainer}>
                <Text style={styles.scrollTitle}>What is it that you need?</Text>

                <View style={styles.scroll}>
                    <ScrollView>
                        <View style={{height: 200, width: 200, marginLeft: 20, borderWidth:0.5, borderColor:'#dddddd'}}>
                            <View style={{flex: 2}}>
                                <Image style={styles.image} source={require("../assets/1.png")}/>
                            </View>
                            <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                                <Text >Blue 19 Liter</Text>
                            </View>
                        </View>
                    </ScrollView>
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
        height: 200,
        marginTop: 20,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },  

})