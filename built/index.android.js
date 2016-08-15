import * as React from 'react';
import { TodoMainView } from './components/TodoMainView';
import { Scene, Router } from 'react-native-router-flux';
export default class App extends React.Component {
    render() {
        return (React.createElement(Router, null, React.createElement(Scene, {key: "root"}, React.createElement(Scene, {key: "home", component: TodoMainView, title: "Todo Main View"}))));
    }
}
