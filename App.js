import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import SwitchToggleExample from './src/components/SwitchToggleExample/SwitchToggleExample';

export default class MyApp extends Component{

  render(){
    return(
      <SwitchToggleExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');