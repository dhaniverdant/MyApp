import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';

export default class SwitchToggleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          switchOn1: false,
          switchOn2: false,
          switchOn4: false
        };
    }
  
    getButtonText() {
        return this.state.switchOn4 ? 'Hour' : 'Day';
    }
    getRightText() {
        return this.state.switchOn4 ? '' : 'Hour';
    }
    getLeftText() {
        return this.state.switchOn4 ? 'Day' : '';
    }

    onPress1 = () => {
      this.setState({ switchOn1: !this.state.switchOn1 });
    }
    onPress2 = () => {
      this.setState({ switchOn2: !this.state.switchOn2 });
    }
    onPress3 = () => {
      this.setState({ switchOn3: !this.state.switchOn3 });
    }
    onPress4 = () => {
      this.setState({switchOn4: !this.state.switchOn4});
    };

    render() {
        return (
            <View style={styles.container}>
                <SwitchToggle
                    switchOn={this.state.switchOn1}
                    onPress={this.onPress1}
                />

                <SwitchToggle
                    containerStyle={styles.containerDua}
                    circleStyle={{
                        width: 38,
                        height: 38,
                        borderRadius: 19,
                        backgroundColor: 'white'
                    }}
                    switchOn={this.state.switchOn2}
                    onPress={this.onPress2}
                    circleColorOff='white'
                    circleColorOn='red'
                    duration={500}
                />

                <SwitchToggle
                    containerStyle={{
                        marginTop: 16,
                        width: 160,
                        height: 65,
                        borderRadius: 30,
                        padding: 5
                    }}
                    backgroundColorOn='#a0e1e5'
                    backgroundColorOff='#e5e1e0'
                    circleStyle={{
                        width: 55,
                        height: 55,
                        borderRadius: 27.5,
                        backgroundColor: 'blue'
                    }}
                    switchOn={this.state.switchOn3}
                    onPress={this.onPress3}
                    circleColorOff='#ff11ff'
                    circleColorOn='green'
                    duration={500}
                />
                
                <SwitchToggle
                    buttonText={this.getButtonText()}
                    backTextRight={this.getRightText()}
                    backTextLeft={this.getLeftText()}
                    
                    type={1}
                    buttonStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute'
                    }}
                    
                    rightContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    leftContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}
                  
                    buttonTextStyle={{fontSize: 20}}
                    textRightStyle={{fontSize: 20}}
                    textLeftStyle={{fontSize: 20}}
                  
                    containerStyle={{
                        marginTop: 16,
                        width: 160,
                        height: 65,
                        borderRadius: 30,
                        padding: 5
                    }}
                    backgroundColorOn='#fff'
                    backgroundColorOff='#fff'
                    circleStyle={{
                        width: 80,
                        height: 55,
                        borderRadius: 27.5,
                        backgroundColor: 'blue',
                    }}
                    switchOn={this.state.switchOn4}
                    onPress={this.onPress4}
                    circleColorOff='#e5e1e0'
                    circleColorOn='#e5e1e0'
                    duration={500}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    containerDua: {
        marginTop: 16,
        width: 108,
        height: 48,
        borderRadius: 25,
        backgroundColor: '#ccc',
        padding: 5
    }
});

AppRegistry.registerComponent('SwitchToggleExample, () => SwitchToggleExample');