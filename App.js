import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import TextExample from './src/components/TextExample/TextExample';

export default class MyApp extends Component{

  render(){
    return(
      <TextExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');