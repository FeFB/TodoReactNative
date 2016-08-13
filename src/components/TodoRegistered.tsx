import * as React from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView, TouchableHighlight} from 'react-native';
import {TodoModel} from '../model/TodoModel';


interface TodoRegisteredProps {
    todos: Array<TodoModel> ;
}

export class TodoRegistered extends React.Component <TodoRegisteredProps, any> {

  constructor(props: TodoRegisteredProps) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos), //Any
      db: this.props.todos,
    };
  }
  
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.todos),
    })
  }

componentWillReceiveProps(nextProps: TodoRegisteredProps) {
    if (nextProps.todos !== this.props.todos) {
        this.setState ({
          dataSource: this.state.dataSource.cloneWithRows(nextProps.todos),
          db: nextProps.todos,
        });

       console.log ('Component Will Receive Props TRUE')
    }
}


onUserInput () {
    var newArray = this.state.db.slice();
    this.setState ({
      dataSource: this.state.dataSource.cloneWithRows(newArray),
      db : newArray,
    });

  }
private renderHeader() {
    return (
      <View>
      <Text style= {styles.footer}> Todos que foram Registradas </Text>
      </View>
    );
  }

 private renderFooter() {
   return(<Text style={styles.footer}> Footer ToDO Text </Text>);
  }

 private renderRow(rowData : any,  sectionID: number, rowID: number) {
   console.log ('renderRow: ' + rowID);
   var doa : string = 'Nao';
   if (rowData.done) {
     doa = 'Sim';
   }

   return (
     <TouchableHighlight
       onPress={()=> this.pressRow(rowData, rowID)}
       underlayColor = '#224991'>
       <View style ={styles.row}>
         <Text style={{fontSize:15, color: '#acc3ec'}}>{rowData.todoText} @ Pronto? {doa} </Text>
         <View style={{flex:1}}>
           <Text style={styles.selectionText}> {rowData[rowData.Selection]} </Text>
         </View>
       </View>
     </TouchableHighlight>

   )
 }

 private pressRow(rowData : any, rowID: number) : void{
    console.log('Clikced ' + rowID);
    var newArray = this.state.db.slice();
    newArray[rowID] = {
     todoText: newArray[rowID].todoText,
      done : !newArray[rowID].done
    };
    this.setState ({
      dataSource: this.state.dataSource.cloneWithRows(newArray),
      db : newArray,
    });
  }


  render () {
    //this.onUserInput();
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}
        renderSectionHeader = {this.renderHeader.bind(this)}
        renderFooter = {this.renderFooter.bind(this)}
        style = {styles.ListView}>
      </ListView>
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
