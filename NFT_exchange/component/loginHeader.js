import React from 'react';
import { View, StyleSheet } from 'react-native';
import Korbit_logo from './Korbit_logo';
import Login_btn from './Login_btn';

export default class loginHeader extends React.Component {
    
    render(){
        return(
            <View style={styles.topView}>
                <Korbit_logo
                    onPress={() => this.goMainScreen()} />
                <Login_btn
                    onPress={() => this.goLoginScreen()} />
            </View>
        )
    }
    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
      goLoginScreen() {
        // LoginScreen으로 화면 이동
        this.props.navigation.navigate('LOGIN');
    }
}

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        //height: 55,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
})