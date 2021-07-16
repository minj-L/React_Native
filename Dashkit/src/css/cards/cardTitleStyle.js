import { StyleSheet } from "react-native";
import theme from "../theme";

export default StyleSheet.create({
    cardTitle_container : {
        flexDirection:"row",
        padding: 20,
        borderRadius: 5,
        borderWidth : 1,
        borderColor: theme.light.backgroundColor,
        backgroundColor: theme.color.backgroundColor,
    },
    cardTitle_colum : {
        flexDirection: 'column',
    },
    cardTitle_titleText : {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: theme.color.color,
    },
    cardTitle_contentText : {
        fontSize: 18,
        marginBottom: 18,
        color: theme.color.color,
    },
    cardTitle_button : {
        width: 161,
        padding: 10,
        borderRadius: 8,
        backgroundColor: theme.primary.backgroundColor,
    },
    cardTitle_buttonText : {
        fontSize: 20,
        color: theme.color.backgroundColor,
    }
});