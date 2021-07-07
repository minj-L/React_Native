import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';


export default class Korbit_logo extends React.Component {
    render() {
        return (
            <View >
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={styles.korbiBtn}>korbit</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    korbiBtn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    topView: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
}
)