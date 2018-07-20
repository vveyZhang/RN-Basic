import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Other extends Component {
    componentWillMount() {
        console.log('other')
    }
    render() {
        return (<View>
            <Text>其他页面</Text>
        </View>)
    }
}