import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Search_icons extends React.Component {
    render() {
        return (
            

            <View >
            <Icon onPress={this.props.onPress} style={styles.search} name="ios-search-outline" size={27} />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    search: {
        color: 'black',
        marginLeft: 22,
        marginTop : 10,
        
      },
}
)