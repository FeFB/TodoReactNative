import * as React from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-material-design';

interface TodoAddProps {
  onUserInput(value: string): void;
}


export class TodoAdd extends React.Component<TodoAddProps, any> {
  public textInput: any;

  constructor(props : TodoAddProps) {
      super(props);
      this.state = {  text : '', };
      this.onSubmitEditing = this.onSubmitEditing.bind(this)

    }

   private onSubmitEditing (event: any) : void {
      console.log ('Print Text ' + event.nativeEvent.text);
      var inputValue = event.nativeEvent.text
      this.props.onUserInput(inputValue);
      this.refs.textInput.clear();

    }

      render () {
        return (
            <View style = {styles.bigView}>
              <View style = {styles.mediumView}>
                <TextInput
                  ref = "textInput"
                  style= {styles.textInput}
                  onChangeText = { (text) => this.setState ({text: text})}
                  onSubmitEditing ={this.onSubmitEditing}
                  value={this.state.text}
                  placeholder = "IO aqui..."
                  placeholderTextColor = '#acc3ec'
                />
            
              </View>
            </View>
        );
      }
}


const styles = StyleSheet.create ({

    bigView: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1c3c79',
      borderWidth: 0.4,
      height: 75,
    },
    mediumView: {
     backgroundColor: '#1c3c79',
     height: 50,
    },

    textInput : {
      height: 40,
      width: 300,
      padding: 5,
      color: '#acc3ec',
      borderWidth: 1,
      borderColor: '#acc3ec'
    },

});
