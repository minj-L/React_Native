import React from 'react';
import { Text, View, } from 'react-native';

export default class First extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300}}>
        <Text>First</Text>
      </View>
    );
  }
}