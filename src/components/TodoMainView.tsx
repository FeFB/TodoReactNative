import * as React from 'react';
import {AppRegistry, View, Text, TextInput, StyleSheet, ListView} from 'react-native';
import {TodoAdd} from './TodoAdd';
import {ListViewTodo} from './ListViewTodo';
import {TodoModel}  from '../model';

export var TODOS = [
    { todoText: 'Sporting Goods', done: false },
    { todoText: 'Sporting Goods', done: true },
    { todoText: 'Sporting Goods', done: true },
    { todoText: 'Electronics', done: true},
    { todoText: 'Electronics', done: true}
];

interface TodoMainProps {

}

interface TodoMainState {
    todos: TodoModel[];
}

export class TodoMainView extends React.Component <TodoMainProps, TodoMainState> {

  constructor (props: TodoMainProps) {

    super(props);
    this.handlerUserInput = this.handlerUserInput.bind(this);
    this.state = {
      todos : TODOS,
    }

  }

  private handlerUserInput(todoText: string) : void {
    console.log('HandlerUserInput ' + todoText);
    var todoPut =  { todoText: todoText, done: false };
    var newArray = this.state.todos.slice();
    console.log('Antes ' + newArray.length);
    newArray.push(todoPut);
    console.log('Depois ' + newArray.length);
    this.setState({
      todos : newArray,
    });
  }

 private pressRow (rowID: number) : void {
    console.log ('Clikced in PAI ' + rowID);
    var newArray  = this.state.todos.slice();
    newArray[rowID] = {
     todoText: newArray[rowID].todoText,
     done : !newArray[rowID].done
    };
    this.setState ({
        todos: newArray,
    });
  }

  render () {
    return (

      <View style = {styles.View}>
        <TodoAdd     onUserInput = {this.handlerUserInput}/>
        <ListViewTodo todos = {this.state.todos}
                      pressRow = { (rowID) => this.pressRow(rowID)}/>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  View: {
    flex: 1
  }
});
