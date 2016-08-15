import * as React from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight } from 'react-native';
export class TodoRegistered extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.todos),
            db: this.props.todos,
        };
    }
    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.todos),
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.todos !== this.props.todos) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.todos),
                db: nextProps.todos,
            });
            console.log('Component Will Receive Props TRUE');
        }
    }
    onUserInput() {
        var newArray = this.state.db.slice();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newArray),
            db: newArray,
        });
    }
    renderHeader() {
        return (React.createElement(View, null, React.createElement(Text, {style: styles.footer}, " Todos que foram Registradas ")));
    }
    renderFooter() {
        return (React.createElement(Text, {style: styles.footer}, " Footer ToDO Text "));
    }
    renderRow(rowData, sectionID, rowID) {
        console.log('renderRow: ' + rowID);
        var doa = 'Nao';
        if (rowData.done) {
            doa = 'Sim';
        }
        return (React.createElement(TouchableHighlight, {onPress: () => this.pressRow(rowData, rowID), underlayColor: '#224991'}, React.createElement(View, {style: styles.row}, React.createElement(Text, {style: { fontSize: 15, color: '#acc3ec' }}, rowData.todoText, " @ Pronto? ", doa, " "), React.createElement(View, {style: { flex: 1 }}, React.createElement(Text, {style: styles.selectionText}, " ", rowData[rowData.Selection], " ")))));
    }
    pressRow(rowData, rowID) {
        console.log('Clikced ' + rowID);
        var newArray = this.state.db.slice();
        newArray[rowID] = {
            todoText: newArray[rowID].todoText,
            done: !newArray[rowID].done
        };
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newArray),
            db: newArray,
        });
    }
    render() {
        //this.onUserInput();
        return (React.createElement(ListView, {dataSource: this.state.dataSource, renderRow: this.renderRow.bind(this), renderSectionHeader: this.renderHeader.bind(this), renderFooter: this.renderFooter.bind(this), style: styles.ListView}));
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
