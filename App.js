import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import AndroidPager from './src/components/AndroidPager/AndroidPager';

export default class MyApp extends Component{

  render(){
    return(
      <AndroidPager/>
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');