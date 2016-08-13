import * as React from 'react';
import {AppRegistry, View} from 'react-native';
import {TodoMainView} from './components/';


export default class App extends React.Component <any, any> {

  constructor() {
    super();
  }

  render() {
    return (
      <View style = {{flex:1}}>
        <TodoMainView></TodoMainView>
      </View>
    );
  }
}
