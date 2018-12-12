import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import PickerExample from './src/components/PickerExample/PickerExample';

export default class MyApp extends Component{

  render(){
    return(
      <PickerExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');