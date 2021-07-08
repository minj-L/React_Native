//핫한작품 아이콘과 텍스트

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Hot_text extends React.Component {
    render() {
        return (

            <View style={{ marginTop: 120, marginLeft: 30, flexDirection: 'row', }}>
                <Icon style={styles.fire} name="flame" size={31} />
                <Text style={styles.hot_text}>핫한 작품</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.

    fire: {
        color: 'red',
        marginLeft: 10,


    },

    hot_text: {
        marginLeft: 8,
        marginRight: 20,

        fontSize: 25,
        fontWeight: 'bold',

    },
});