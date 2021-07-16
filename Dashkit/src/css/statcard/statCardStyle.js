import { StyleSheet } from "react-native";
import theme from "../theme";

export default StyleSheet.create({
    statCard_container : {
        //flex: 1,
        padding: 23,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: theme.secondary.backgroundColor,
    },
    statCard_row : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statCard_column : {
        flexDirection: 'column',
    },
    statCard_topText : {
        fontSize: 10,
        marginBottom: 3,
        color: theme.secondary.backgroundColor,
    },
    statCard_bottomText : {
        fontSize: 20,
        fontWeight: 'bold',
        color:theme.color.color,
    },
    statCard_percentBoxText : {
        fontSize: 10,
        color:theme.success.backgroundColor,
    },
    statCard_percentBox : {
        paddingLeft : 6,
        paddingRight : 6,
        paddingTop : 2,
        paddingBottom: 2,
        marginTop : 5,
        marginLeft : 5,
        borderRadius: 5,
        backgroundColor: '#BBFFBB',
    },
    statCard_dollarIcon : {
        fontSize : 25,
        alignContent: 'flex-end',
        color: theme.secondary.backgroundColor,
    }
});