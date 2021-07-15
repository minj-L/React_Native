import { StyleSheet } from "react-native";
//import theme from "../theme";

export default StyleSheet.create({
    //...theme,
    cardTitle_container : {
        flexDirection:"row",
        padding: 20,
        borderRadius: 5,
        borderWidth : 1,
        borderColor: '#D3D3D3',
        backgroundColor: '#fff',
    },
    cardTitle_colum : {
        flexDirection: 'column',
    },
    cardTitle_titleText : {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    cardTitle_contentText : {
        fontSize: 18,
        marginBottom: 18,
        color: '#000',
    },
    cardTitle_button : {
        padding: 13,
        borderRadius: 5,
        backgroundColor: 'blue',
    },
    cardTitle_buttonText : {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }
});