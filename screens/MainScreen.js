import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TextInput} from "react-native";
import {COLORS} from "../style/colors";
import {ColorContainer, CustomBtn} from "../components";
import {getText, addText} from "../store/text";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    text: getText(state)
});
export const MainScreen = connect(mapStateToProps, {addText})(({navigation, addText}) => {
    const colors = [
        {
            color: `${COLORS.ORANGE}`,
        },
        {
            color: `${COLORS.RED}`,
        },
        {
            color: `${COLORS.DARKBLUE}`,
        },
        {
            color: `${COLORS.PURPLE}`,
        },
        {
            color: `${COLORS.BUTTON}`,
        },
        {
            color: `${COLORS.BACKGROUND}`,
        },
    ];
    const [bgColor, setBgColor] = useState(COLORS.BACKGROUND);
    const [text, setText] = useState("");
    const handleColor = (color) => {
        setBgColor(color);
    };
    const handleText = (text) => {
        setText(text);
    };
    const handleSendText = () => {
        addText({text: text});
        navigation.navigate("DetailsScreen", {
            bgColor: bgColor,
            // text: text
        });

        setBgColor(COLORS.BACKGROUND);
        setText("");
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={text}
                    onChangeText={(text) => handleText(text)}
                    style={styles.input}
                    textAlign={"left"}
                    placeholder={'Type your text'}/>
            </View>
            <View style={styles.colorsContainer}>
                <FlatList
                    horizontal={true}
                    data={colors}
                    renderItem={({item}) => (
                        <ColorContainer
                            onPress={
                                () => {
                                    console.log('item.color', item.color),
                                        handleColor(item.color)
                                }}
                            bgColor={item.color}
                            borderColor={COLORS.TEXT}
                        />
                    )}
                    keyExtractor={item => item.color}
                />

            </View>
            <CustomBtn onPress={() => handleSendText()}/>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorsContainer: {
        height: 50,

    },
    inputContainer: {
        width: "100%",
        height: 50,
        backgroundColor: COLORS.TEXT,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10,
        borderBottomWidth: 4,
        borderTopWidth: 4,
        borderColor: "#A8A8A8"
    },
    input: {
        fontSize: 20,
        marginHorizontal: 18,
        width: "90%"
    }
});