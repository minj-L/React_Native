//NFT 세부 정보 페이지를 위한 스크린
//detail_suggest

import React from 'react';
import { Text, View, } from 'react-native';

export default class NFT_detailScreen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>NFT_detailScreen</Text>
      </View>
    );
  }

  goMainScreen(){
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('MAIN');
  }
}