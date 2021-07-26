import React from 'react';
import {
View,
} from 'react-native';
import LoginAfterHeader from './component/LoginAfterHeader';
import LoginHeader from './component/loginHeader';

export default class App extends React.Component {
  state = {
    _isLogin: false
  };
  componentDidMount() {
    this.onLoad();
  }
  onLoad = () => {
    this.props.navigation.addListener('willFocus', () => {
      this.checkLoginStatus();
    });
  };
  checkLoginStatus = () => {
    AsyncStorage.getItem('isLogin', (err, result) => {
      this.setState({ _isLogin: JSON.parse(result) });
    });
  };
  render() {
    /* const _isLogin = this.state.isLoggedIn; */
    return (
      <View>
        {
          this.props.state._isLogin
          ? <LoginAfterHeader navigation={this.props.navigation}/>
          : <LoginHeader navigation={this.props.navigation}/>
        }
      </View>
    );
  }
}