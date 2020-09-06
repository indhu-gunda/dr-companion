import React from "react";
import { StyleSheet, Text } from "react-native";

const baseStyles = StyleSheet.create({
    body: {
        fontSize: 24,
        fontFamily: "Poppins_700Bold"
    }
})

const HeadingText = ({ children, style }) => {
    return (
        <Text style={[baseStyles.body, style]}>
            {children}
        </Text>
    )
}

export default HeadingText;