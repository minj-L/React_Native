import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Korbit_logo from './Korbit_logo';
import ETH_btn from './ETH_btn';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export default class LoginAfterHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 0,
        }   
    }

    async componentDidMount() {
        let a = 80;

        AsyncStorage.getItem('ETH', (err, result) => {

            if(result == ''){

                AsyncStorage.setItem('ETH', a.toString(), () => {
                    console.log('ETH 초기화')
                });

            }

        });

        

       /*  AsyncStorage.setItem('ETH', a.toString(), () => {
            console.log('ETH 초기화')
        });
 */
        // ETH 초기값 할당
        AsyncStorage.getItem('ETH', (err, result) => {

            console.log(result); // User1 출력
            this.setState({ result })

        });

        /* AsyncStorage.getItem('ETH_after', (err, result2) => {
            
            console.log(result2); // User1 출력
            this.setState({result2})
            
        }); */
    }

    render(){
        return(
            <View style={styles.topView}>
                <Korbit_logo
                    onPress={() => this.goMainScreen()} />
                <ETH_btn
                    title={this.state.result + ' ETH'}/>
                <TouchableOpacity
                    onPress={() => 
                    {AsyncStorage.setItem('logIncom', JSON.stringify(false), () =>{
                        console.log('로그인 미완료')
                    })
                    AsyncStorage.setItem('ETH', '80', () => {
                        console.log('ETH 초기화')
                    })
                    this.goMainScreen()}
                }>
                    <Text>로그아웃</Text>
                </TouchableOpacity>
            </View>
        )
    }
    goLoginAfterScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('LOGIN_AFTER');
    }
    goMainScreen(){
        // MainScreen으로 화면 이동
        this.props.navigation.navigate('MAIN');
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