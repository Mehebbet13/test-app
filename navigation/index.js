import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {DetailsScreen, MainScreen} from "../screens";
import {COLORS} from "../style/colors";

const {Screen, Navigator} = createStackNavigator();
export const RootNav = () => {
    return (
        <NavigationContainer initialRouteName={"MainScreen"}>
            <Navigator>
                <Screen
                    options={{
                        title: 'Test App',
                        headerStyle: {
                            backgroundColor: COLORS.TOOLBAR,
                        }
                    }}
                    name={"MainScreen"}
                    component={MainScreen}/>
                <Screen
                    options={{title: 'Test App'}}
                    name={"DetailsScreen"}
                    component={DetailsScreen}/>
            </Navigator>
        </NavigationContainer>
    );
};
