import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Button } from '../../components'
import { NavigationActions } from '../../utils'

@connect()
export default class Home extends Component {
    componentWillMount() {
        console.log('home')
    }

    gotoOther = () => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Other' }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Button text="Goto Other" onPress={this.gotoOther} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    },
})
