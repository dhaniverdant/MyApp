import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import ScrollViewExample from './src/components/ScrollViewExample/ScrollViewExample';

export default class MyApp extends Component{

  render(){
    return(
      <ScrollViewExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');