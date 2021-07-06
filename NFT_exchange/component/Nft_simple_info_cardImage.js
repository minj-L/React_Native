import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class Nft_simple_info_cardImage extends Component{
    static defaultProps = {
        title: 'untitled',
        source: 'https://thumbs.dreamstime.com/z/transparent-designer-must-have-fake-background-39672616.jpg',
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }
    render(){
      return(
        <TouchableOpacity
            onPress={this.props.onPress}>
            <View style={styles.cardImageContainer}>
                <Image style={styles.cardImage}
                    source={this.props.source}/>
            </View>
        </TouchableOpacity>
      )
    }
}
    
const styles = StyleSheet.create({
    cardImage: {
        width: 300,
        height: 250,
        borderTopLeftRadius: 20, //왼쪽 위 테두리만 둥글게
        borderTopRightRadius: 20,
    },
})