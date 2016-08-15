import * as React from 'react';
import { Text, View, StyleSheet, ListView, TouchableNativeFeedback } from 'react-native';
import { ListViewRow } from './ListViewRow';
export class ListViewTodo extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.db = this.props.todos;
        this.dataSource = ds.cloneWithRows(this.db);
    }
    componentDidMount() {
        this.dataSource = this.dataSource.cloneWithRows(this.props.todos);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.todos !== this.props.todos) {
            this.db = nextProps.todos;
            this.dataSource = this.dataSource.cloneWithRows(this.db);
            console.log('Component Will Receive Props TRUE');
        }
    }
    renderHeader() {
        return (React.createElement(View, null, React.createElement(Text, {style: styles.footer}, " Todos que foram Registradas ")));
    }
    renderFooter() {
        return (React.createElement(Text, {style: styles.footer}, " Footer ToDO Text "));
    }
    renderRow(rowData, sectionID, rowID) {
        var doa = 'Nao';
        if (rowData.done) {
            doa = 'Sim';
        }
        return (React.createElement(TouchableNativeFeedback, {onLongPress: () => console.log('Long Press'), onPress: () => this.pressRow(rowData, rowID), background: TouchableNativeFeedback.SelectableBackground()}, React.createElement(View, null, React.createElement(ListViewRow, {rowData: rowData}))));
    }
    pressRow(rowData, rowID) {
        console.log('Clikced in Filha ' + rowID);
        this.props.pressRow(rowID);
    }
    render() {
        return (React.createElement(ListView, {dataSource: this.dataSource, renderRow: this.renderRow.bind(this), renderSectionHeader: this.renderHeader.bind(this), renderFooter: this.renderFooter.bind(this), style: styles.ListView}));
    }
}
const styles = StyleSheet.create({
    ListView: {
        flex: 1,
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
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 18,
        borderBottomWidth: 1,
        borderColor: '#2753a5',
    },
    selectionText: {
        fontSize: 15,
        paddingTop: 3,
        color: 'black',
        textAlign: 'right'
    },
});
