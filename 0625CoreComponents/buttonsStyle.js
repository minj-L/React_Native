import { StyleSheet } from "react-native";
import theme from "../tstheme";

export default StyleSheet.create({
    buttons_container : {
        flexDirection:"row",
        borderRadius:10,
        backgroundColor:theme.baseColor.backgroundColor,
    },
    buttons_button : {
        backgroundColor:theme.baseColor.backgroundColor,
    },
    buttons_button_press : {
        backgroundColor:theme.baseColor.backgroundColor,
    },
    buttons_text : {
        color:theme.baseFontColor.color,
    }
});