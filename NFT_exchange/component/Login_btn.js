import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';




export default class Login_btn extends React.Component {
    render() {
        return (
            
            <View >
            <TouchableOpacity onPress={this.props.onPress}>                
                <Text style={styles.loginBtn}>로그인</Text>
            </TouchableOpacity>
            </View>

        );
    }

  
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topView: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

    korbiBtn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    loginBtn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'normal',
    },

});
