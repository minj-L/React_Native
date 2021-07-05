//버튼 커스텀을 위한 컴포넌트

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityBase, } from 'react-native';

export default class CustomButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={style.button}>
                <Text style={styles.title}>타이틀</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    title: {
        fontSize: 15,
    }
})