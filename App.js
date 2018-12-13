import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import RefreshControlExample from './src/components/RefreshControlExample/RefreshControlExample';

export default class MyApp extends Component{

  render(){
    return(
      <RefreshControlExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');