import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Touchable from './Touchable'

const Button = ({ text, children, style, textStyle, ...rest }) => (
  <Touchable style={[styles.button, style]} {...rest}>
    <Text style={[styles.text, textStyle]}>{text || children}</Text>
  </Touchable>
)

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    height: 40,
    backgroundColor: '#5934fd',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#140361',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 12,
    color: '#ffffff',
  },
})

export default Button