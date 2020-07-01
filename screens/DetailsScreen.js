import React from 'react';
import {StyleSheet, View} from "react-native";
import {CustomText} from "../components";
import {getText} from "../store/text";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    text: getText(state)
});
export const DetailsScreen = connect(mapStateToProps)(({route, text}) => {
    const {bgColor} = route.params;
    return (
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <CustomText style={{lineHeight: 28, fontSize: 24}}>
                Your text is: {text}
            </CustomText>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
});