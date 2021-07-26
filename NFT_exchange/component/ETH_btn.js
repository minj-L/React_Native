import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';




export default class ETH_btn extends React.Component {

    static defaultProps = {
        title: 'untitled',
       
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
            marginBottom: 10,
            fontSize: 15,
            fontWeight: 'normal',
        
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }

    render() {
        return (
            
            <View >
            <TouchableOpacity onPress={this.props.onPress}>                
                <Text style={[
                    {fontSize: this.props.fontSize},
                    {fontWeight: this.props.fontWeight},
                    {marginLeft: this.props.marginLeft},
                    {marginRight: this.props.marginRight},
                    {marginTop: this.props.marginTop},
                    {marginBottom: this.props.marginBottom},
 
                ]}>
                    {this.props.title}</Text>
            </TouchableOpacity>
            </View>

        );
    }

  
}


const styles = StyleSheet.create({

    loginBtn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'normal',
    },

});
