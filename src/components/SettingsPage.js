import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsPage extends Component {

    render() {
        console.log(this.props, this.state);
        return (
            <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: '#ccc'}}>
                <Text>settings</Text>
            </View>
        )
    }
}

export default SettingsPage;