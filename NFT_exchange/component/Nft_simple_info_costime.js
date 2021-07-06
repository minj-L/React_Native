import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Timer_nft_info from './Timer_nft_info';

export default class Nft_simple_info_costtime extends Component{
    static defaultProps = {
      nft_cost: '0.00ETH',
      nft_cost_color: 'black',
      fontSize: 20,
      paddingLeft: 20,
      fontWeight: 'bold',
    }
    constructor(props){
        super(props);
    }
    render() {
      return(
        <View style={styles.cost_colum}>
            <Text style={[
              {color: this.props.nft_cost_color},
              {fontSize: this.props.fontSize},
              {paddingLeft: this.props.paddingLeft},
              {fontWeight: this.props.fontWeight},
              ]}>{this.props.nft_cost}</Text>
            <Timer_nft_info />
        </View>
      )
    }
}
    
const styles = StyleSheet.create({
    cost_colum: {
        width: '100%',
        flexDirection: 'column',
        marginTop: 10,
    },
})