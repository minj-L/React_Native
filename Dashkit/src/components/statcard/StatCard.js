import React from 'react';
import {View, Text} from 'react-native';
import statCardStyle from '../../css/statcard/statCardStyle';

/**
 * statcard 컴포넌트
 * @author 주민지
 */

export default function StatCard({cost, percent}) {
    return(
        <View style={statCardStyle.statCard_container}>
            <View style={statCardStyle.statCard_row}>
                <View style={statCardStyle.statCard_column}>
                    <Text style={statCardStyle.statCard_topText}>BUDGET</Text>
                    <View style={statCardStyle.statCard_row}>
                        <Text style={statCardStyle.statCard_bottomText}>$</Text>
                        <Text style={statCardStyle.statCard_bottomText}>{cost}</Text>
                        <View style={statCardStyle.statCard_percentBox}>
                            <Text style={statCardStyle.statCard_percentBoxText}>{percent}</Text>
                        </View>
                    </View>
                </View>
                <Text style={statCardStyle.statCard_dollarIcon}>$</Text>
            </View>
        </View>
    )
}

StatCard.defaultProps = {
    cost : '00,000',
    percent : '+0.0%',
}