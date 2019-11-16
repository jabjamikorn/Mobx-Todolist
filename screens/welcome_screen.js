import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { observer } from 'mobx-react'
// import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome';

import todoListStore from '../store/todo_list_store';
@observer

class WeclomeScreen extends React.Component {
  // render(){
  //   return(
  //     <View>
  //       <Text>Testtttt</Text>
  //     </View>
  //   )
  // }
  submitTodo(event) {
    let title = event.nativeEvent.text;
    todoListStore.todos.push({ title: title, done: false });
    this.refs['1'].clear();
    this.refs['1'].focus();
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  render() {
    let todoListView;
    if (todoListStore.todos.length > 0) {
      todoListView = todoListStore.todos.map((todo, index) => {
        let text;
        if (todo.done) {
          text =
            <Text style={styles.todoTextDone}
              onPress={() => this.toggleTodo(todo)}>
              <Icon name='check' />
              {todo.title}
            </Text>;
        } else {
          text =
            <Text style={styles.todoText}
              onPress={() => this.toggleTodo(todo)}>
              {todo.title}
            </Text>;
        }
        return (
          <View key={index} style={styles.todo}>
            {text}
          </View>
        )
      })
    } else {
      todoListView = <View style={styles.noTodoList}>
        <Text style={styles.noTodoListText}>No todoList, please add one first!
        </Text></View>;
    }

    return (
      <View style={styles.container}>
        <Icon style={styles.welcome} name="home" size={30} />
        <View style={styles.listView}>
          {todoListView}
        </View>
        <Text style={styles.footer}>
          Total: {todoListStore.total}, Done: {todoListStore.doneTotal}
        </Text>
        <TextInput ref='1' autoCapitalize={'none'}
          autoCorrect={false} style={styles.textInput}
          onSubmitEditing={(event) => this.submitTodo(event)} />
      </View>
    )
  }
}
export default WeclomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    marginTop: 50
  },

  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },

  noTodoList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#666',
  },

  noTodoListText: {
    color: '#666',
  },

  todo: {
    height: 40,
    borderColor: '#eee',
    borderWidth: 1,
    backgroundColor:'#324',

  },

  todoText: {
    textAlign: 'center',
    lineHeight: 40,
  },

  todoTextDone: {
    textAlign: 'center',
    lineHeight: 40,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },

  footer: {
    marginBottom: 10,
    color: '#666',
  },

  textInput: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderColor: '#eee',
    borderWidth: 1,
    bottom: 0,
  },
});
