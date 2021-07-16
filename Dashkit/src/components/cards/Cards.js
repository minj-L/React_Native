import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import cardTitleStyle from '../../css/cards/cardTitleStyle';
import { cardHeaderStyle } from '../../css/cards';
import CardTitle from './CardTitle';
import { Button } from 'react-native';

/**
 * 카드타이틀 컴포넌트
 * @author 주민지
 */


export default function Cards({cardsTitleStyle, useCardHeader, navigation, headerTitle, content, onPress, children}) {
    let navBtn;
    if(!!navigation){
        navBtn = navigation.map((data, index) => (
            <TouchableOpacity key={index} onPress={data.onPress}>
                <Text>{data.title}</Text>
            </TouchableOpacity>
        ))
    }
    return(
        <>
            {/* {
                !!cardsTitleStyle
                ? <TouchableOpacity 
                    onPress={ () => {
                        !!onPress
                        onPress()
                        setPressButton(!pressButton)}}
                        style = {[threeSizebutton[buttonSize]]}>
                    <Text style={buttonsStyle.buttons_text}>
                            {title}
                    </Text>
                    </TouchableOpacity>
                : null
            } */}
            {
                !!useCardHeader
                ? <View style={cardHeaderStyle.cardHeader_colum}>
                    <View style={[cardHeaderStyle.cardHeader_topContainer, {flexDirection: "row", justifyContent: "space-between"}]}>
                        <View>
                            <Text style={cardHeaderStyle.cardHeader_titleText}>{headerTitle}</Text>
                        </View>
                        <View>
                            {navBtn}
                        </View>
                    </View>
                </View>
                : null
            }

            <View style={cardTitleStyle.cardTitle_container}>
                <View style={cardTitleStyle.cardTitle_colum}>
                    {children}
                </View>
                
            </View>
        </>
    )

}

CardTitle.defaultProps = {
    headerTitle : "String",
    onPress: () => null,
}