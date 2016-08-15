import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TodoAdd } from './TodoAdd';
import { ListViewTodo } from './ListViewTodo';
export var TODOS = [
    { todoText: 'Sporting Goods', done: false },
    { todoText: 'Sporting Goods', done: true },
    { todoText: 'Sporting Goods', done: true },
    { todoText: 'Electronics', done: true },
    { todoText: 'Electronics', done: true }
];
export class TodoMainView extends React.Component {
    constructor(props) {
        super(props);
        this.handlerUserInput = this.handlerUserInput.bind(this);
        this.state = {
            todos: TODOS,
        };
    }
    handlerUserInput(todoText) {
        console.log('HandlerUserInput ' + todoText);
        var todoPut = { todoText: todoText, done: false };
        var newArray = this.state.todos.slice();
        console.log('Antes ' + newArray.length);
        newArray.push(todoPut);
        console.log('Depois ' + newArray.length);
        this.setState({
            todos: newArray,
        });
    }
    pressRow(rowID) {
        console.log('Clikced in PAI ' + rowID);
        var newArray = this.state.todos.slice();
        newArray[rowID] = {
            todoText: newArray[rowID].todoText,
            done: !newArray[rowID].done
        };
        this.setState({
            todos: newArray,
        });
    }
    render() {
        return (React.createElement(View, null, React.createElement(TodoAdd, {onUserInput: this.handlerUserInput}), React.createElement(ListViewTodo, {todos: this.state.todos, pressRow: (rowID) => this.pressRow(rowID)})));
    }
}
const styles = StyleSheet.create({
    MasterView: {
        flex: 1
    }
});
