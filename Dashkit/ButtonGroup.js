import { styles } from 'ansi-colors'
import React, {useStae} from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export const ButtonGroup = ({buttons,
doSomethingAfterClick}) => {

    const [clickedId, setClickedId] = useStae(0)

    return (
        <View style={styles.container}>
            {
                buttons.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity key={index} 
                            onPress={(item) => handleClick(item, index)}
                            style={[index === clickedId ? styles.buttonActive : styles.button,]}>
                            <Text style={index === clickedId ? styles.textActive : styles.text}>{buttonLabel}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TouchableOpacity>
                <Text>
                    one
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row'
    },
    button:{
        flex :1 ,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'red',
        borderWidth : 0.5,
        borderColor : 'black'
    },
    buttonActive : {
        flex :1 ,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'black',
        borderWidth : 0.5,
        borderColor : 'black'
    },
    text : {
        color: 'black'
    },
    textActive:{
        color: 'white'
    }
})