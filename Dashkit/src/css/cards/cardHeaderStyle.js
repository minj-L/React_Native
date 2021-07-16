import { StyleSheet } from "react-native";
import theme from "../theme";

export default StyleSheet.create({
    cardHeader_colum : {
        flexDirection: 'column',
    },
    cardHeader_topContainer : {
        padding: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderWidth : 1,
        borderColor: theme.light.backgroundColor,
        borderBottomColor: theme.color.backgroundColor,
        backgroundColor: theme.color.backgroundColor,
    },
    cardHeader_bottomContainer : {
        padding: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth : 1,
        borderColor: theme.light.backgroundColor,
        backgroundColor: theme.color.backgroundColor,
    },
    cardHeader_titleText : {
        fontSize: 18,
        color: theme.color.color,
    },
    cardHeader_contentText : {
        fontSize: 18,
        marginBottom: 18,
        color: theme.color.color,
    },
});