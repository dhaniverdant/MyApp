import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';

const users = [
    {name: 'abc'},
    {name: 'def'},
    {name: 'ghi'},
    {name: 'jkl'}
];

export default class Component4 extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            usersDataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(users, sectionId, rowId, higlightRow){
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{users.name}</Text>
            </View>
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
        backgroundColor: '#f0f',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});

AppRegistry.registerComponent('Component4, () => Component4');