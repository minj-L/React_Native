import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import NFT_name from './component/NFT_name';
import Profile from './component/Profile';
import Detail_main from './component/detail_main';
import CustomButton from './component/CustomButton';

/*이미지 주소 복사를 해서 링크를 붙여넣는다.*/
export default class App extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Nft_simple_info_cardImage 
             source={{uri:'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg'}}
             borderBottomLeftRadius = {20}
             borderBottomRightRadius = {20}
             height = {350}/>
          <Profile 
            title = {"hyunji"}/>
          <NFT_name 
            title = {"NATURE"}/>
          <Detail_main />
          <CustomButton />
        </View>
      )
    }
}
    
  
const styles = StyleSheet.create({
    container:{
      flex:1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
      justifyContent: 'center', //수직에서 중앙으로 정렬
      //alignItems:'center', //수평에서 중앙으로 정렬
      marginTop: 20,
    },
})