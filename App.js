/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {Navigator} from 'react-navigation';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Component5 from './src/components/Component5/Component5';
import Component6 from './src/components/Component6/Component6';

export default class MyApp extends Component{
  renderScene(route, navigator){
    switch(route.id){
      case 'component5':
        return(<Component5 navigator={navigator} title="component5"/>)
      case 'component6': 
        return(<Component6 user={route.user} navigator={navigator} title="component6"/>)
    }
  }

  render(){
    return(
      <NavigationExperimental.Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('MyApp, () => MyApp');