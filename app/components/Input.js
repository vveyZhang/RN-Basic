import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({ icon, label, labelStyle, inputStyle, getFieldProps, ...rest }) => (<View style={styles.inputContainer} >
    {icon ? <View style={styles.inputIcon} >{icon}</View> : null}
    {label ? <Text style={[styles.label, labelStyle]} >{label}</Text> : null}
    <View style={styles.inputWarp} >
        <TextInput style={[styles.input, inputStyle]} {...getFieldProps}  {...rest} underlineColorAndroid='transparent' />
    </View>
</View>)

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'nowrap'
    },
    inputIcon: {
        minWidth: 30,
        marginRight: 4,
        alignItems: "center",
        justifyContent: 'center'
    },
    label: {
        fontSize: 14,
        color: '#555',
        marginRight: 4,
        minWidth: 30,
        alignItems: "center",
        justifyContent: 'center',
    },
    inputWarp: {
        flex: 2,
        paddingVertical: 2,
    },
    input: {
        height: 26,
        fontSize: 14,
        color: "#444",
        padding: 0,
        width: '100%'
    }
})

export default Input