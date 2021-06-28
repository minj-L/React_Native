//텍스트 입력창과 추가 버튼이 들어가는 부분

import React, {useState} from 'react'; //React라는 component를 사용하겠다.
import {Button, StyleSheet, TextInput, View} from 'react-native'; 
//'react-native에서 {}의 컴포넌트를 가져와 사용하겠다.

//const는 함수형 컴포넌트 클래스형 보다 간결하게 기술 할 수 있다.
const TodoInsert = ({onAddTodo}) => { //addTodo를 전달받음
  const [newTodoItem, setNewTodoItem] = useState('');
  //new는 새로 입력한 텍스트의 상태, set은 new를 업데이트 하는 함수

  //실시간으로 사용자가 입력한 텍스트 값의 변화를 관리
  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  //아이템을 추가해주는 핸들러
  const addTodoHandler = () => {
    onAddTodo(newTodoItem); //사용자가 입력한 텍스트 값(newTodoItme)을 전달 받아 목록에 추가
    setNewTodoItem(''); //입력창을 공백으로 업데이트 시킴 (추가 누르면 검색창 비어지는 거)
  };

  return ( //return 안에는 html요소를 작성한다.
    <View style={styles.inputContainer}>
      <TextInput
       style={styles.input}
       placeholder="Add an item!"
       placeholderTextColor={'#999'}
       onChangeText={todoInputHandler}
       value={newTodoItem}
       autoCorrect={false}
       />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

//StyleSheet에 설정한 앱의 styles 속성
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
      marginRight: 10,
  }
});

/*App이라는 component를 내보낸다는 의미이다.
다른 컴포넌트에서 App을 불러와서 사용할 수 있다.
ex. import App form'./App';*/
export default TodoInsert;
