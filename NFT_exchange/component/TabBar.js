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
      tabBarLabel: 'First',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
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
      tabBarLabel: 'Second',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon
            style={[{color: tintColor}]}
            size={25}
            name={'ios-settings'}
          />
        </View>
      ),
      activeColor: '#4B0082',
      inactiveColor: '#226557',
      barStyle: {backgroundColor: '#B0C4DE'},
    },
  },
  Third: {
    screen: Third,
    navigationOptions: {
      tabBarLabel: 'Third',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon
            style={[{color: tintColor}]}
            size={25}
            name={'ios-settings'}
          />
        </View>
      ),
      activeColor: '#006400',
      inactiveColor: '#226557',
      barStyle: {backgroundColor: '#8FBC8F'},
    },
  },
},
{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    pressColor: 'black',
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: 'black',
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true,
  },
},
);
export default createAppContainer(TabBar);