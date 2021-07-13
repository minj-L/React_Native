import React from 'react'
import { View, Text } from 'react-native';
import {Badges} from '../../typescript/src/components/badges';
import {ButtonGroup} from '../../typescript/src/components/buttongroup';


export default function Screen() {
    return (
        <View style={{flex:1,padding:10}}>
            <ButtonGroup buttonList={[1,2,3,4]} selectBackgroundColor="#ff0000" selectColor="#0000ff" />
        </View>
    )
}
