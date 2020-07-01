import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {COLORS} from "../style/colors";

export const ColorContainer = ({bgColor, borderColor, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, {backgroundColor: `${bgColor}`, borderColor: `${borderColor}`}]}>

        </TouchableOpacity>
    );
};
export const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 44,
        borderRadius: 25,
        borderWidth: 3,
        marginHorizontal: 5,


    },

});
