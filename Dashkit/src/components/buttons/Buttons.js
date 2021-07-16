import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import buttonsStyle from '../../css/buttons/buttonsStyle';

/**
 * 버튼즈 컴포넌트
 * 스타일 시트는 buttonsStyle시트를 공유한다.
 * @author 주민지
 */

const threeSizebutton = {
    small : buttonsStyle.buttons_small,
    default : buttonsStyle.buttons_default,
    big : buttonsStyle.buttons_big,
}

const fullColorButton = {
    primary : buttonsStyle.buttons_primary,
    secondary : buttonsStyle.buttons_secondary,
    success : buttonsStyle.buttons_success,
    danger : buttonsStyle.buttons_danger,
    warning : buttonsStyle.buttons_warning,
    info : buttonsStyle.buttons_info,
    light : buttonsStyle.buttons_light,
    dark : buttonsStyle.buttons_dark,
    link : buttonsStyle.buttons_link,
}

const borderButton = {
    primaryBorder : buttonsStyle.buttons_primaryBorder,
    secondaryBorder : buttonsStyle.buttons_secondaryBorder,
    successBorder : buttonsStyle.buttons_successBorder,
    dangerBorder : buttonsStyle.buttons_dangerBorder,
    warningBorder : buttonsStyle.buttons_warningBorder,
    infoBorder : buttonsStyle.buttons_infoBorder,
    lightBorder : buttonsStyle.buttons_lightBorder,
    darkBorder : buttonsStyle.buttons_darkBorder,
}

const borderButtonTextColor ={
    primary : buttonsStyle.buttons_primaryTextColor,
    secondary : buttonsStyle.buttons_dangerTextColor,
    success : buttonsStyle.buttons_successTextColor,
    danger : buttonsStyle.buttons_darkTextColor,
    warning : buttonsStyle.buttons_warningTextColor,
    info : buttonsStyle.buttons_infoTextColor,
    light : buttonsStyle.buttons_lightBorder,
    dark : buttonsStyle.buttons_darkTextColor,
}

export default function BorderButtons({onPress, threeSizeButtonStyle, borderButtonStyle, 
    fullColorButtonStyle, checkIfonButtonStyle, buttonSize, fullStyle, borderStyle, 
    title, fullColorButtonTextColor, pressedTextColor, borderTextColor, 
    icon, title2}) 
{

    const [pressButton, setPressButton] = useState(false);

    return(
        <View style={buttonsStyle.buttons_container}>
            {
                !!threeSizeButtonStyle
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
            }
            {
                !!fullColorButtonStyle
                ? <TouchableOpacity 
                    onPress={ () => {
                        !!onPress
                        onPress()
                        setPressButton(!pressButton)}}
                        style = {[fullColorButton[fullStyle]]}>
                    <Text style = {
                        [buttonsStyle.buttons_fullAndBordertext,
                        {color:fullColorButtonTextColor}]
                        }>
                            {title}
                    </Text>
                    </TouchableOpacity>
                : null
            }
            {
                !!borderButtonStyle
                ? <TouchableOpacity 
                    onPress={ () => {
                        !!onPress
                        onPress()
                        setPressButton(!pressButton)}}
                    style = {pressButton 
                    ? [fullColorButton[fullStyle]]
                    : [borderButton[borderStyle]]}>
                    <Text style = {
                        pressButton 
                        ? [buttonsStyle.buttons_fullAndBordertext, 
                        {color : pressedTextColor}] 
                        : [borderButtonTextColor[borderTextColor]]}>
                            {title}
                    </Text>
                    </TouchableOpacity>
                : null
            }
            {
                !!checkIfonButtonStyle
                ? <TouchableOpacity 
                    onPress={ () => {
                        !!onPress
                        onPress()
                        setPressButton(!pressButton)}}
                    style = {
                        pressButton 
                        ? buttonsStyle.buttons_checkIconPrimaryBorder
                        : buttonsStyle.buttons_checkIconDefault}>
                        <View style = {buttonsStyle.buttons_row}> 
                            <Text style = {
                                /* 체크아이콘 들어가야 하는 곳 Text 'i'로 대체 */
                                pressButton 
                                ? buttonsStyle.buttons_primaryTextColor 
                                : buttonsStyle.buttons_checkIconButtonDefaultText}>
                                    {icon}
                            </Text>
                            <Text> </Text>
                            <Text style = {
                                pressButton 
                                ? buttonsStyle.buttons_primaryTextColor 
                                : buttonsStyle.buttons_checkIconButtonDefaultText}>
                                    {title2}
                            </Text>
                        </View>
                    </TouchableOpacity>
                : null
            }
        </View> 
    )
}

BorderButtons.defaultProps = {
    title: 'default',
    icon: 'icon',
    title2: 'default',
    onPress: () => undefined,
}