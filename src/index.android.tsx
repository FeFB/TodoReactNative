import  * as React from 'react';
import {TodoMainView} from './components/TodoMainView';
import {Scene, Router} from 'react-native-router-flux';

export default class App extends React.Component <any, any> {

  
  render() {

    return (
        <Router>
          <Scene key="root">
            <Scene key="home" component={TodoMainView} title = "Todo Main View"/>
        </Scene>
      </Router>
   
        
    );
  }
}


