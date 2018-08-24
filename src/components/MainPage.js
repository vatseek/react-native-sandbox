import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';


class MainPage extends Component {

    constructor() {
        super();
        this.onSettings = this.onSettings.bind(this);
        this.onTest = this.onTest.bind(this);
    }

    onSettings() {
        const {navigation} = this.props;
        navigation.navigate('Settings');
    }

    onTest() {
        const {test} = this.props;
        test('Hello there!');
    }

    render() {
        const {message = ''} = this.props.data;
        return (
            <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: '#daa'}}>
                <Button
                    onPress={this.onTest}
                    title="Test"
                    color="#000"
                />

                { message ? <Text>{message}</Text> : null }
            </View>
        )
    }
}
export default MainPage;