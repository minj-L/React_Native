import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import ActionCreators from '../actions'; 
//생성한 액션과 리듀서를 Count 컴포넌트에서 사용할 수 있도록 connect를 통해 연결을 만들어줍니다.


class Count extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={s.container}>
        <Text style={{ fontSize: 20 }}>{this.props.count}</Text>
        <TouchableOpacity style={s.upButton} onPress={()=>this.props.countUp(1)}>
          <Text style={{ fontSize: 20 }}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.upButton} onPress={()=>this.props.countUp(2)}>
          <Text style={{ fontSize: 20 }}>+2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.downButton} onPress={()=>this.props.countUp(-1)}>
          <Text style={{ fontSize: 20 }}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.downButton} onPress={()=>this.props.countUp(-2)}>
          <Text style={{ fontSize: 20 }}>-2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  upButton: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 20
  },
  downButton: {
    marginLeft: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20
  }
});

function mapStateToProps(state) { //스토어의 state를 해당 컴포넌트의 props로 전달한다.
    return {
        count: state.count
    };
}

function mapDispatchToProps(dispatch) { //스토어의 dispatch를 props에 전달합니다.
    // dispatch를 통해 액션생성자에서 생성한 액션을 스토어로 전달할 수 있습니다.
    return {
        countUp: (num) => {
            dispatch(ActionCreators.countUp(num));
        },
        countDown: (num) => {
            dispatch(ActionCreators.countDown(num));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);