import React, { Component } from 'react';
import { TouchableOpacity, Text, } from 'react-native';

export default class NFT_name extends Component{
    static defaultProps = {
        title: 'untitled',
        titleColor: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}>
                <Text style={[
                    {color: this.props.titleColor},
                    {fontSize: this.props.fontSize},
                    {fontWeight: this.props.fontWeight},
                    {marginLeft: this.props.marginLeft},
                    {marginTop: this.props.marginTop},
                ]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}