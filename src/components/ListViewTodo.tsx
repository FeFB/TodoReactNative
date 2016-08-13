import * as React from 'react';
import {AppRegistry, Text, View, StyleSheet, ListView, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import {TodoModel} from '../model/TodoModel';
import {ListViewRow} from './ListViewRow';


interface ListViewTodoProps {
  todos: any ;
  pressRow(rowID: number) : void;
}

export class ListViewTodo extends React.Component <ListViewTodoProps, any> {

  private dataSource : any;
  private db : Array<any>;

  constructor(props: ListViewTodoProps) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.db = this.props.todos;
    this.dataSource = ds.cloneWithRows (this.db);

  }
  componentDidMount() {
    this.dataSource = this.dataSource.cloneWithRows(this.props.todos);
  }

  componentWillReceiveProps(nextProps: ListViewTodoProps) {
    if (nextProps.todos !== this.props.todos) {
      this.db = nextProps.todos;
      this.dataSource = this.dataSource.cloneWithRows (this.db);
      console.log ('Component Will Receive Props TRUE')
    }
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
    var doa : string = 'Nao';
    if (rowData.done) {
      doa = 'Sim';
    }

    /*<View style ={styles.row}>
    <Text style={{fontSize:15, color: '#acc3ec'}}>{rowData.todoText} @ Pronto? {doa} </Text>
      <View style={{flex:1}}>
        <Text style={styles.selectionText}> {rowData[rowData.Selection]} </Text>
      </View>
  </View>*/

    return (
      <TouchableNativeFeedback
        onLongPress = {() => console.log('Long Press')}
        onPress={()=> this.pressRow(rowData, rowID)}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
      <View>
        <ListViewRow  rowData = {rowData}></ListViewRow>
      </View>
    </TouchableNativeFeedback>
    )
  }

  private pressRow(rowData : any, rowID: number) : void{
    console.log('Clikced in Filha ' + rowID);
    this.props.pressRow (rowID);
  }


  render () {
    return (
      <ListView
      dataSource = {this.dataSource}
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
