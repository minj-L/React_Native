import React from 'react';
import { StyleSheet, View } from 'react-native';
import Sizing from './component/Sizing';

export default function App() {
  return (
    <View style={styles.sizingStyle_container}>
        <View style={styles.sizingStyle_view}>
            
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  sizing_container : {
      flex : 1,
      flexDirection : 'row',
  },
  sizing_view : {
      flex :1,
      width : 100,
      height : 100,
      borderRadius : 50,
      backgroundColor : 'black',
  },
})