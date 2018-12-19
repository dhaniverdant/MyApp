import React, { Component } from 'react';
import { AppRegistry, WebView } from 'react-native';

export default class WebViewExample extends Component {
  render() {
    return (
        <WebView
            source={{uri: 'https://github.com/facebook/react-native'}}
            style={{marginTop: 0}}
        />
    );
  }
}

AppRegistry.registerComponent('WebViewExample, () => WebViewExample');