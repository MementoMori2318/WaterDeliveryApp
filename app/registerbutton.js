import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function RegisterButton( { text, onPress } ) {
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
        alignItems: "center",
    },
    buttonText: {
        color: "#000000",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 20,
        textAlign: "center",
    },
})