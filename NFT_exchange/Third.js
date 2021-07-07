import React from 'react';
import { Text, View, } from 'react-native';

export default class Third extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Third</Text>
      </View>
    );
  }
}