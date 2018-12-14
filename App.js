import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import SliderExample from './src/components/SliderExample/SliderExample';

export default class MyApp extends Component{

  render(){
    return(
      <SliderExample/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');