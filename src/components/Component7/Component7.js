import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Dimensions } from 'react-native';

export default class Component7 extends Component {
  
  render() {
    var width = Dimensions.get('window');
    return (
      <View>
        <Image
        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Image
          style={styles.faviconStyle}
          source={{uri: 'http://goinkscape.com/wp-content/uploads/2015/04/transparent-5.png'}}
        />
        <Image
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  faviconStyle: {
    alignSelf: 'center',
    height: 150,
    width: 200,
    borderWidth: 1
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('Component7', () => Component7);