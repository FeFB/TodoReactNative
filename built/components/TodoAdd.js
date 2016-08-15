import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
export class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '', };
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
    }
    onSubmitEditing(event) {
        console.log('Print Text ' + event.nativeEvent.text);
        var inputValue = event.nativeEvent.text;
        this.props.onUserInput(inputValue);
        this.refs.textInput.clear();
    }
    render() {
        return (React.createElement(View, {style: styles.bigView}, React.createElement(View, {style: styles.mediumView}, React.createElement(TextInput, {ref: "textInput", style: styles.textInput, onChangeText: (text) => this.setState({ text: text }), onSubmitEditing: this.onSubmitEditing, value: this.state.text, placeholder: "IO aqui...", placeholderTextColor: '#acc3ec'}))));
    }
}
const styles = StyleSheet.create({
    bigView: {
        flex: 1,
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
    textInput: {
        height: 40,
        width: 300,
        padding: 5,
        color: '#acc3ec',
        borderWidth: 1,
        borderColor: '#acc3ec'
    },
});
