import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient'
import { createAction, NavigationActions, getStatusBarHeight } from '../utils'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import theme from '../common/theme'
import Button from '../components/Button'
import Input from '../components/Input'
import Icon from 'react-native-vector-icons/FontAwesome';
@createForm()
@connect(({ router, app }) => ({ router, app }))
export default class Login extends Component {
    isClick = () => {
        const { getFieldsValue } = this.props.form;
        const allValue = getFieldsValue();
        for (let key in allValue) {
            if (!allValue[key]) return false
        }
        return true
    }
    submit = () => {
        if (!this.isClick()) return
        const { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'Home' }))
    }
    render() {
        const { router, form } = this.props;
        const { getFieldProps } = form;
        return <View style={theme.safeContainer} >
            <KeyboardAwareScrollView>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#39a9fc', '#496efd', '#5838fd']} style={styles.logoContainer}>
                    <Image source={require('../images/login-icon.png')} resizeMode="cover" style={styles.logo} />
                    <Image source={require('../images/login-logo-bg.png')} resizeMode="cover" style={styles.logoBg} />
                </LinearGradient>
                <View style={theme.container} >
                    <View style={styles.inputRow} ><Input
                        getFieldProps={getFieldProps('user', {
                            // initialValue: 2232,
                            trigger: "onChangeText",
                            rules: [{
                                require: true
                            }]
                        })}
                        icon={<Icon name="user-o" size={16} color="#bbbbbb" />}
                        placeholder="用户名" /></View>
                    <View style={styles.inputRow} >
                        <Input
                            getFieldProps={getFieldProps('password', {
                                // initialValue:
                                trigger: "onChangeText",
                                rules: [{
                                    require: true
                                }]
                            })}
                            icon={<Icon name="unlock-alt" size={16} color="#bbbbbb" />}
                            secureTextEntry={true}
                            placeholder="密码" /></View>
                    <Button style={[styles.submit, !this.isClick() && styles.noSubmit]} onPress={this.submit} >登录</Button>
                </View>
            </KeyboardAwareScrollView>
        </View>
    }
}
const styles = StyleSheet.create({
    logoContainer: {
        height: 300,
        paddingTop: getStatusBarHeight(true),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        height: 150,
        width: 150,
        marginTop: -20,
    },
    logoBg: {
        height: 95,
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    inputRow: {
        borderColor: '#ddd',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 10,
    },
    submit: {
        marginTop: 25,
    },
    noSubmit: {
        backgroundColor: '#675a9e',
    }
})