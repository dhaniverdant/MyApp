import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Component1 extends Component{
  constructor(props){
    super(props);
    this.state={
      nama : 'Ossas',
      showNama : false,
      pesan : this.props.message
    }
  }

  render(){
    let name = this.state.showNama ? this.state.nama : 'No Name';
    return(
      <View>
        <Text>{this.state.pesan}</Text>
        <Text>My Name is {name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1, () => Component1');
