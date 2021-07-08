//버튼 커스텀을 위한 컴포넌트
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, } from 'react-native';
import CustomButton from './component/CustomButton';
import QR_Wallet_NotLogin from './component/QR_Wallet_Not_Login';

export default class App extends React.Component{
  render(){
    
    const open = {
      transform:[
        {scale:openModal},
        {translateY:saveModal}
      ]
    }
    
    return(
      <>
      <CustomButton 
        onPress={()=>console.log("react")}/>
      
      <Animated.View style={(open)}>

      </Animated.View>
      <QR_Wallet_NotLogin />
      </>
    )
  }
}