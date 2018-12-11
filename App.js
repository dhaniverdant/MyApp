import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component7 from './src/components/Component7/Component7';

export default class MyApp extends Component{

  render(){
    return(
      <Component7/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');