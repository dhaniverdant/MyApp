import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import TextInputExample from './src/components/TextInputExample/TextInputExample';

export default class MyApp extends Component{

  render(){
    return(
      <TextInputExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');