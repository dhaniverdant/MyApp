import React, { Component } from 'react';
import { ViewPagerAndroid, AppRegistry, StyleSheet, View, Text } from 'react-native';

export default class AndroidPager extends Component {
    render() {
        return (
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
            <View style={styles.pageStyle} key="1">
              <Text>First page</Text>
            </View>
            <View style={styles.pageStyle} key="2">
              <Text>Second page</Text>
            </View>
          </ViewPagerAndroid>
        );
      }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20
    }
});

AppRegistry.registerComponent('AndroidPager, () => AndroidPager');