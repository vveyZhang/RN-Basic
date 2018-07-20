import { createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../pages/tabNavigator/Home'
import Mine from '../pages/tabNavigator/Mine'
import Part from '../pages//tabNavigator/Part'
const iconSize = 18;
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        path: 'home',
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={iconSize} color={tintColor} name="home" />
            ),
        }
    },
    Part: {
        screen: Part,
        path: 'part',
        navigationOptions: {
            tabBarLabel: '零件库',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={iconSize} color={tintColor} name="cogs" />
            ),
        }
    },
    Mine: {
        screen: Mine,
        path: 'mine',
        navigationOptions: {
            tabBarLabel: '我',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={iconSize} color={tintColor} name="user-circle-o" />
            ),
        }
    }
}, {
        initialRouteName: 'Mine',
        paths: 'tab',
        tabBarOptions: {
            activeTintColor: '#5934fd',
            inactiveTintColor: '#9b9b9b',
            showIcon: true,
            style: {
                height: 50,
                backgroundColor: '#fff',
                borderTopColor: 'rgba(0, 0, 0, 0.25)',
                borderTopWidth: StyleSheet.hairlineWidth,
            },
            labelStyle: {
                fontSize: 9,
            },
            tabStyle: {
                marginVertical: 3
            }
        }

    })

export default TabNavigator