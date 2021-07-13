import { StyleSheet } from "react-native";
import theme from "../tstheme";

export default StyleSheet.create({
    roundedCircle_container : {
        //flex:1,
        flexDirection:"row"
    },
    roundedCircle_view : {

        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:5,
        paddingLeft:5,
        borderRadius: 200,
        borderWidth: 0.5,
        borderColor: '#000',
        backgroundColor:'#fff',
    },
});