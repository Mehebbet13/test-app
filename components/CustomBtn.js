import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {COLORS} from "../style/colors";
import {CustomText} from "./CustomText";


export const CustomBtn = ({onPress}) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}>
            <View style={styles.container}>
                <CustomText weight={"medium"}>Send text</CustomText>
            </View>

        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 294,
        height: 57,
        backgroundColor: COLORS.BUTTON,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        position: "absolute",
        bottom: 23
    },
});