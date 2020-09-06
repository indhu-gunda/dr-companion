import React from "react";
import { StyleSheet, View } from "react-native";

const baseStyles = StyleSheet.create({
    container: {
        width: "80%",
        marginTop: 32,
        marginBottom: 32,
        alignSelf: "center"
    },
})

const TextContainer = ({ children, style }) => {
    return (
        <View style={[baseStyles.container, style]}>
            {children}
        </View>
    )
}

export default TextContainer;