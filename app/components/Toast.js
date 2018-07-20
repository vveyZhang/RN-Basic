import React, { Component } from 'react';
import toast from 'react-native-root-toast';
import { Text, StyleSheet, View } from 'react-native';
import PropsTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
// Add a Toast on screen.
let show = false;
let Toast = (text, icon, options) => {
    const defultOption = {
        duration: 50,
        position: toast.positions.CENTER,
        delay: 0,
        animation: false,
        onShown: () => {
            // calls on toast\`s appear animation end.
            show = true
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
            show = false
        }
    }
    const newOption = { ...defultOption, ...options }
    if (show) return
    toast.show(<ToastContent icon={icon} text={text} textStyle={newOption.testStyle} />, { ...newOption });
}

const ToastContent = ({ icon, text, textStyle }) => (<Text style={stlyes.content} >
    <Text style={{ marginBottom: 16 }} >{icon}</Text>
    {'\n\n'}
    <Text style={[{ lineHeight: 20 }, textStyle]} >{text}</Text>
</Text>)

ToastContent.propTypes = {
    icon: PropsTypes.element,
    text: PropsTypes.string
}

const stlyes = StyleSheet.create({
    content: {
        fontSize: 12,
    }
})

export default Toast