import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";


export default function LoginButton( { text, onPress} ) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 14,
        width: 300,
        backgroundColor: "#165581",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 20,
        textAlign: "center",
        
    },
})