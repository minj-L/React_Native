import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Korbit_logo extends React.Component {
    render() {
        return (
        <View> 
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{ flexDirection: 'row', }}>
                    <Icon style={styles.arrowbakc} name="arrow-back-outline" size={26}/>
                    <Text style={styles.go_first}>처음으로</Text>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
        arrowbakc: {
            color: 'black',
            marginLeft: 20,
        },
        go_first: {
        marginLeft: 8,
        marginTop: 1,
        fontSize: 18,
        }
    }
)