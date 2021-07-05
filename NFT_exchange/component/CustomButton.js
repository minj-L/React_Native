//버튼 커스텀을 위한 컴포넌트

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

export default class CustomButton extends Component{
    static defaultProps = {
        title: 'untitled',
        buttonColor: '#000',
        titleColor: '#fff',
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={[
                styles.button,
                {backgroundColor: this.props.buttonColor}
            ]}
            onPress={this.props.onPress}>
                <Text style={[
                    styles.title,
                    {color: this.props.titleColor}
                ]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 20,
        borderRadius: 40,
        width: 140,
        height: 50,
        backgroundColor:'#000000',
    },
    title: {
        fontSize: 15,
    }
})