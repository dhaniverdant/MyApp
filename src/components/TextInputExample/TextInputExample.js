import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

class TextInputExample extends Component {
    render() {
        return (
            <TextInput
                {...this.props}
                editable = {true}
                maxLength = {40}
            />
        );
    }
}

export default class UselessTextInputMultiline extends Component {
    constructor(props) {
        super(props);
        this.state = {
        text: 'Useless Multiline Placeholder',
        };
    }

    render() {
        return (
            <View style={{
                backgroundColor: this.state.text,
                borderBottomColor: '#000000',
                borderBottomWidth: 1 }}
            >
                <TextInput
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('TextInputExample, () => TextInputExample');