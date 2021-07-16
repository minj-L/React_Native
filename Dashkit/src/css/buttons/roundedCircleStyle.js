import { StyleSheet } from "react-native";
import theme from "../tstheme";


export default StyleSheet.create({
    roundedCircle_container : {
        //flex:1,
        flexDirection:"row",
    },
    roundedCircle_small : {
        width : 35,
        height : 35,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        backgroundColor:theme.color.backgroundColor,
    },
    roundedCircle_midium : {
        width : 50,
        height : 50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        backgroundColor:theme.color.backgroundColor,
    },
    roundedCircle_big : {
        width : 60,
        height : 60,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        backgroundColor:theme.color.backgroundColor,
    },
    roundedCircle_plus : {
        
    }
});