import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

export default class TextExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.'
    };
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>

        <Text style={{color: 'red'}} numberOfLines={5}>
          {this.state.bodyText}{'\n'}{'\n'}
        </Text>

        <Text style={{fontWeight: 'bold'}}>
          I am bold
          <Text style={{color: 'red'}}>
            and red
          </Text>
        </Text>

      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#729adb'
  }
});

AppRegistry.registerComponent('TextExample', () => TextExample);