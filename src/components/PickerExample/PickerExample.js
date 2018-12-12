import React, { Component } from 'react';
import { AppRegistry, View, Text, Picker, StyleSheet } from 'react-native'

export default class PickerExample extends Component {
   constructor(){
      super();
      this.state = {
         user: ''
      }
   }
   
   updateUser = (user) => {
      this.setState({ user: user })
   }

   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
});

AppRegistry.registerComponent('PickerExample, () => PickerExample');