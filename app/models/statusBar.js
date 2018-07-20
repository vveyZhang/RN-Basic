import React, { Component } from 'react';
import { StatusBar } from 'react-native'
export default {
    namespace: 'statusBar',
    state: {
        translucent: true,
        backgroundColor: 'rgba(255,255,255,0)',
        networkActivityIndicatorVisible: true,
        barStyle: "light-content",
        hidden: false
    },
    reducers: {
        changeStatusBar(state, { payload }) {
            return { ...state, ...payload }
        }
    }
}
