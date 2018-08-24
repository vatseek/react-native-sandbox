import React, { Component } from 'react';
import { View, Button } from 'react-native';


class MainPage extends Component {

    constructor() {
        super();
        this.onSettings = this.onSettings.bind(this);
    }

    onSettings() {
        const { navigation } = this.props;
        navigation.navigate('Settings');
    }

    render() {
        return (
            <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: '#daa'}}>
                <Button
                    onPress={this.onSettings}
                    title="Settings"
                    color="#000"
                />
            </View>
        )
    }
}
export default MainPage;