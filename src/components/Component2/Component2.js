import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component{
  _onPressButton(){
    console.log('You Pressed View 1');
  }

  onPress(){
    console.log('You pressed view 2');
  }
  
  render(){
    return(
      <View>
          <View style={styles.myView}>
              <Text style={styles.myText}>ABC</Text>
          </View>
              <View style={styles.container}>
                <TouchableHighlight 
                  style={styles.v1}  
                  onPress={this._onPressButton}
                  underlayColor="transparent"
                >
                  <View>
                    <Text>View 1</Text>
                  </View>
                </TouchableHighlight>

                <TouchableOpacity
                  onPress={this.onPress}
                  style={styles.v2}
                >
                  <View>
                    <Text>View 2</Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.v3}>
                  <Text>View 3</Text>
                </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor:'blue'
  },
  myText: {
    color:'black'
  },
  container:{
    flexDirection:'row',
    height:100
  },
  v1:{
    flex:1,
    backgroundColor:'red',
    padding:10
  },
  v2:{
    flex:1,
    backgroundColor:'green',
    padding:10
  },
  v3:{
    flex:1,
    backgroundColor:'cyan',
    padding:10
  }
})

AppRegistry.registerComponent('Component2, () => Component2');
