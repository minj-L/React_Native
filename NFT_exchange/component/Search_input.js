import React, { Component } from 'react';
import { TextInput, StyleSheet,View } from 'react-native';


export default class Search_input extends React.Component {
    render() {
        return (
            

            <View >
            <TextInput
            style={styles.searchbar}
            placeholder="작품명 검색" />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    searchbar: {
        marginLeft: 12,
        width: 280,
        fontSize: 16
    
      },
      
}
)