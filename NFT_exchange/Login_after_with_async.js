import React, { useState } from 'react';
import {  Image, TextInput, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Detail_main from './component/detail_main';
import CustomButton from './component/CustomButton';
import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import Nft_simple_info_Profile from './component/Nft_simple_info_Profile';
import Nft_simple_info_costtime from './component/Nft_simple_info_costime';
import Profile from './component/Profile';
import NFT_name from './component/NFT_name';
import Hot_text from './component/Hot_text';
import Login_btn from './component/Login_btn';
import Korbit_logo from './component/Korbit_logo';
import Search_icons from './component/Search_icons';
import Search_input from './component/Search_input';
import Qrcode from './component/Qrcode';
import ETH_BTN from './component/ETH_btn';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';
import AsyncStorage from '@react-native-community/async-storage';

const { width } = Dimensions.get("window");
const height = width * 0.5;
const images = [
    'https://img4.yna.co.kr/photo/etc/epa/2019/12/06/PEP20191206054201848_P4.jpg',
    'https://ichef.bbci.co.uk/news/800/cpsprodpb/C173/production/_117832594_066549055.jpg',
    'http://res.heraldm.com/content/image/2013/05/27/20130527000159_0.jpg',
    'http://www.economyf.com/pds_update/umg_20200528234240.jpg',
    'http://db.kookje.co.kr/news2000/photo/2018/1206/L20181206.22021001594i1.jpg'

]

const Input = () => {

    const [text, setText] = useState('');

    var opa_num; // 공백일 경우 0, 아닐경우 1로해서 바로 투명도 조절.

    if (text == '') {
        opa_num = 0
    }
    else {
        opa_num = 1
    }

    return (
        <>
            <View style={styles.searchView} >

                <Search_icons
                //   onPress={() => this.goWrongSearch()} 왜인지 모르겠으나 정렬이 안됌...
                />

                <TextInput
                    style={styles.searchbar}
                    placeholder="작품명 검색"
                    value={text}
                    onChangeText={text => setText(text)}

                />

                <TouchableOpacity onPress={() => setText('')}>


                    <Icon style={{ opacity: opa_num, marginTop: 8 }} name="close-outline" size={30} />


                </TouchableOpacity>

                <Qrcode 
                marginTop = {10}/>
            </View>

        </>
    );
}



export default class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {result:20};
        
      }

    
      componentDidMount async () {
        AsyncStorage.setItem('ETH', '80', () => {
            console.log('유저 닉네임 저장 완료')
        });

        // ETH 초기값 할당
        AsyncStorage.getItem('ETH', (err, result) => {
            
            console.log(result); // User1 출력
            this.setState({result})
            
        });


        let a = 100;

        a -= 10;

        AsyncStorage.setItem('ETH', a.toString(), () => {
            console.log('유저 닉네임 저장 완료')
        });

      }

      

    render() {


        return (

            <ScrollView style={styles.container} stickyHeaderIndices={[1]} >

                <View style={styles.topView}>
                    <Korbit_logo
                        onPress={() => this.goMainScreen()} />

                    <ETH_BTN
                        title={this.state.result}
                        onPress={() => this.goLoginScreen} />


                </View>

                <View style={styles.midView}>

                    <Input />

                </View>

                <View style={{ marginTop: 30, width, height }}>
                    <ScrollView pagingEnabled horizontal style={{ width, height }}>

                        {images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={{ width, height, resizeMode: 'contain' }} />
                        ))
                        }
                    </ScrollView>
                </View>

                {/*여기 부터가 detail_main입니다.*/}
                <View style={{ marginTop: 10, marginLeft: 30 }}>
                    <Profile
                        title={'hyunji'}
                        onPress={() => this.goArtist_Screen()} />
                    <NFT_name
                        title={'NATURE'}
                        marginLeft={20}
                        onPress={() => this.goNFT_detailScreen()} />
                    <Detail_main />
                    <CustomButton
                        onPress={() => this.goNFT_detailScreen()} />
                </View>

                <View>
                    <Hot_text />
                </View>

                {/*여기 부터가 Nft_simple_info 프레임입니다.*/}
                <View style={{ marginTop: 10, marginLeft: 55 }}>
                    <Nft_simple_info_cardImage
                        source={{ uri: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg' }}
                        onPress={() => this.goNFT_detailScreen()} />
                    <View style={styles.cardContainer}>
                        <NFT_name
                            title={'The hill'}
                            fontSize={20}
                            onPress={() => this.goNFT_detailScreen()} />
                        <Nft_simple_info_Profile
                            title={'hyunji'}
                            onPress={() => this.goArtist_Screen()} />
                        <Nft_simple_info_costtime
                            nft_cost={'0.01ETH'} />
                    </View>
                </View>

            </ScrollView>
        );
    }
    goLoginScreen() {
        // LoginScreen으로 화면 이동
        this.props.navigation.navigate('LOGIN');
    }

    goArtist_Screen() {
        // ARTIST_screen으로 화면 이동
        this.props.navigation.navigate('ARTIST');
    }

    goNFT_detailScreen() {
        //SampleScreen으로 이동
        this.props.navigation.navigate('SUGESST');
    }

    goWrongSearch() {
        //WrongSearch으로 이동
        this.props.navigation.navigate('WRONG');
    }
    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    topView: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchView: {
        flexDirection: 'row',

    },
    korbiBtn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    loginBtn: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'normal',
    },

    midView: {

        flexDirection: 'row',
        height: 60,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',

    },
    search: {
        color: 'black',
        marginLeft: 22
    },
    searchbar: {
        marginLeft: 12,
        width: 260,
        fontSize: 16

    },

    qrcode: {
        color: 'black',
        marginLeft: 10

    },
    scrollView: {
        flex: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    slide_img: {
        height: 270,
        width: 250,
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10,

    },
    cardContainer: {
        backgroundColor: '#d3d3d3',
        borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
        borderBottomRightRadius: 20,
        marginBottom: 20,
        width: 300,
        height: 150,
    },

});