import React from 'react'
import {View} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import First from '../First';
import Second from '../Second';
import Third from '../Third';

const TabBar = createMaterialTopTabNavigator({
  First: {
    screen: First,
    navigationOptions: {
      tabBarLabel: '제안',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon 
          style={[{color: tintColor}]} 
          size={25} 
          name={'ios-home'} 
          />
        </View>
      ),
      initialRouteName: 'Home',
      activeColor: '#C71585',
      inactiveColor: '#226557',
      barStyle: {backgroundColor: '#FFC0CB'},
    },
  },
  Second: {
    screen: Second,
    navigationOptions: {
      tabBarLabel: '정보',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon
            style={[{color: tintColor}]}
            size={25}
            name={'ios-settings'}
          />
        </View>
      ),
    },
  },
},

{
  tabBarOptions: {
    pressColor: 'transparent',
    style:{
      backgroundColor: 'black',
      marginTop: 20,
      borderRadius: 50,
      shadowColor: 'transparent',
    },
    indicatorStyle: {
      backgroundColor: null,
    },
    activeTintColor: '#FFF',
    inactiveTintColor: '#d1cece',
  }
},
);
export default createAppContainer(TabBar);