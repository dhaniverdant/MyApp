import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

export default class Component5 extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            usersDataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    usersDataSource: this.state.usersDataSource.cloneWithRows(response)
                });
            });
    }

    onPress(users){
        this.props.navigator.push({
            id: 'component6',
            user: users
        });
    }

    renderRow(users, sectionId, rowId, higlightRow){
        return(
            <TouchableHighlight onPress={() => {this.onPress(users)}}>
                <View style={styles.row}>
                <Text style={styles.rowText}>{users.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            <ListView
                dataSource={this.state.usersDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create ({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#4d79ff',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});

AppRegistry.registerComponent('Component5, () => Component5');