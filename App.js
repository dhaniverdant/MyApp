import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import ModalExample from './src/components/ModalExample/ModalExample';

export default class MyApp extends Component{

  render(){
    return(
      <ModalExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');