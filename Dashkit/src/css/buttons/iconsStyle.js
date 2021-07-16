import { StyleSheet } from "react-native";
import theme from "../tstheme";

export default StyleSheet.create({
    icons_container : {
        flexDirection:"row"
    },
    icons_squareDefaultView : {
        width : 50,
        height : 50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderWidth: 1.2,
        borderColor: '#E2E2E2',
        borderRadius: 10,
        backgroundColor:theme.color.backgroundColor,
    },
    icons_squareBaseView : {
        width : 50,
        height : 50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderWidth: 1.2,
        borderColor: '#E2E2E2',
        borderRadius: 10,
        backgroundColor:theme.baseColor.backgroundColor,
    },
    icons_circleDefaultView : {
        width : 50,
        height : 50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        backgroundColor:theme.color.backgroundColor,
    },
    icons_circleBaseView : {
        width : 50,
        height : 50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        backgroundColor:theme.baseColor.backgroundColor,
    },
    icons_defaultText : {
        color : '#000',
    },
    icons_baseText : {
        color : '#FFF',
    },
});