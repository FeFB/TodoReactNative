import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export class ListViewRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var done = 'Nao';
        if (this.props.rowData.done) {
            done = 'Sim';
        }
        return (React.createElement(View, {style: styles.row}, React.createElement(Text, {style: { fontSize: 15, color: '#acc3ec' }}, this.props.rowData.todoText, " @ Pronto? ", done, " "), React.createElement(View, {style: { flex: 1 }}, React.createElement(Text, {style: styles.selectionText}, " ", this.props.rowData[this.props.rowData.Selection], " "))));
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
