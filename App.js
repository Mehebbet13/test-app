import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {RootNav} from "./navigation";
import {AppLoading} from "expo";
import {loadFonts} from "./style/fonts";
import store from "./store";
import {Provider} from "react-redux";

export default function App() {
    const [loaded, setLoaded] = useState(false);
    if (!loaded) {
        return (
            <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)}/>
        );
    }
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={"#505052"}/>
            <RootNav/>
        </Provider>
    );
}

