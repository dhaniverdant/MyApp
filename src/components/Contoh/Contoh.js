import React, { Component } from 'react';
import { ProgressBarAndroid, AppRegistry, StyleSheet, View } from 'react-native';

export default class Contoh extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ProgressBarAndroid/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 10
    }
});

AppRegistry.registerComponent('Contoh, () => Contoh');