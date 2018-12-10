import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, StyleSheet} from 'react-native';

export default class Component6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.user.name,
            username: this.props.user.username,
            email: this.props.user.email,
            website: this.props.user.website,
            address: this.props.user.address,
            company: this.props.user.company
        }
    }

    onPress(){
        this.props.navigator.push({
            id:'component5'
        });
    }

    render(){
        return(
            <View>
                <Text style={styles.detail}>Details About {this.state.name}</Text>
                <Text style={styles.detail}>Username : {this.state.username}</Text>
                <Text style={styles.detail}>Email : {this.state.email}</Text>
                <Text style={styles.detail}>Website : {this.state.website}</Text>
                <Text style={styles.detail}>Address : {this.state.address.street}</Text>
                <Text style={styles.detail}>Company : {this.state.company.name}</Text>
                <Button
                    onPress={this.onPress.bind(this)}
                    title="Back"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    detail: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#94d4e8'
    }
})

AppRegistry.registerComponent('Component6, () => Component6');