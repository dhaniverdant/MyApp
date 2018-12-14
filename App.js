import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import SectionListExample from './src/components/SectionListExample/SectionListExample';

export default class MyApp extends Component{

  render(){
    return(
      <SectionListExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');