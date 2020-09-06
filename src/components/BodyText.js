import React from "react";
import { StyleSheet, Text } from "react-native";

const baseStyles = StyleSheet.create({
    body: {
        fontSize: 16,
        fontFamily: "OpenSans_400Regular"
    }
})

const BodyText = ({ children, style }) => {
    return (
        <Text style={[baseStyles.body, style]}>
            {children}
        </Text>
    )
}

export default BodyText;