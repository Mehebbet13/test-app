import * as Font from 'expo-font';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';


export const loadFonts = () => {
    return Font.loadAsync({
        RobotoRegular,
        RobotoBold,
        RobotoMedium
    });
};

export const FONT_FAMILIES = {
    regular: "RobotoRegular",
    medium: "RobotoMedium",
    bold: "RobotoBold",
};

