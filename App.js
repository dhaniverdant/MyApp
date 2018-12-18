import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import WebViewExample from './src/components/WebViewExample/WebViewExample';

export default class MyApp extends Component{

  render(){
    return(
      <WebViewExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');