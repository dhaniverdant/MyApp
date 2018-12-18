import React, { Component } from 'react';
import { AppRegistry, View, TouchableNativeFeedback, Text } from 'react-native';

export default class NativeFeedbackComponent extends Component {

    _onPressButton(){
        console.log('button pressed');
    }

    render() {
        return (
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
              <Text style={{margin: 30}}>Press</Text>
            </View>
          </TouchableNativeFeedback>
        );
    }
}

AppRegistry.registerComponent('NativeFeedbackComponent, () => NativeFeedbackComponent');