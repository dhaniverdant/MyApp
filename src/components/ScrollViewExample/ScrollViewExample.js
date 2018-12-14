import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ScrollView } from 'react-native';

export default class ScrollViewExample extends Component {
    constructor(){
        super();
        this.state = {
            names: [
                {'name': 'Ben', 'id': 1},
                {'name': 'Susan', 'id': 2},
                {'name': 'Roberts', 'id': 3},
                {'name': 'Mary', 'id': 4},
                {'name': 'Daniel', 'id': 5},
                {'name': 'Laura', 'id': 6},
                {'name': 'John', 'id': 7},
                {'name': 'Debra', 'id': 8},
                {'name': 'Aron', 'id': 9},
                {'name': 'Ann', 'id': 10},
                {'name': 'Steve', 'id': 11},
                {'name': 'Olivia', 'id': 12}
            ]
        }

    }

   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});

AppRegistry.registerComponent('ScrollViewExample, () => ScrollViewExample');