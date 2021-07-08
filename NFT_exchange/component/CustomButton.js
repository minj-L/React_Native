//버튼 커스텀을 위한 컴포넌트
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

export default class CustomButton extends Component{
    static defaultProps = { //아무런 설정을 안했을 시 버튼의 기본 설정
        title: '제안하기',
        buttonColor: '#000',
        titleColor: '#fff',
        marginRight: 25,
        marginLeft: 30,
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={[
                styles.button,
                {marginRight: this.props.marginRight},
            ]}
            onPress={this.props.onPress}>
                <Text style={[
                    styles.button_title,
                    {marginLeft: this.props.marginLeft},
                ]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginLeft: 20,
        borderRadius: 40,
        width: 140,
        height: 50,
        backgroundColor:'#000000',
    },
    button_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    }
})