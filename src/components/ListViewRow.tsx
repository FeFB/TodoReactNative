import * as React from 'react';
import {View,  Text, StyleSheet} from 'react-native';
import {Button, Card } from 'react-native-material-design';


interface ListViewRowProps {
    rowData: any;

}

export class ListViewRow extends React.Component<ListViewRowProps, any> {

  constructor (props: ListViewRowProps) {
    super (props);
  }


  render () {
    var done = 'Nao';
    if (this.props.rowData.done) { done = 'Sim'; }

    return (
      <View style ={styles.row}>
        <Text style={{fontSize:15, color: '#acc3ec'}}>{this.props.rowData.todoText} @ Pronto? {done} </Text>
        <View style={{flex:1}}>
          <Text style={styles.selectionText}> {this.props.rowData[this.props.rowData.Selection]} </Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create ({
  ListView: {
  flex:1,
  backgroundColor: '#1c3c79',
  },
  textInput: {
    height: 40,
    color: 'white',
    borderWidth: 1,
    width: 100,
  },
  footer: {
    fontSize: 14,
    color: '#acc3ec',
    textAlign: 'center'
  },
  row:{
    flex:1,
    flexDirection:'row',
    padding:18,
    borderBottomWidth: 1,
    borderColor: '#2753a5',
  },
  selectionText:{
    fontSize:15,
    paddingTop:3,
    color:'black',
    textAlign:'right'
  },

});
