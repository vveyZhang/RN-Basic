import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, View, StatusBar } from 'react-native'
import {
    createStackNavigator,
    NavigationActions,
    SafeAreaView
} from 'react-navigation'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';

import { connect } from 'react-redux'

import { getActiveRouteName, getStatusBarHeight, createAction } from '../utils'

import TabNavigator from './tabNavigator';
import Login from '../pages/Login'
import { routerConfig } from './mainNavigator';
const MainNavigator = createStackNavigator(
    {
        HomeNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null
            }
        },
        ...routerConfig
    },
    {
        initialRouteName: 'HomeNavigator',
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: true,
            headerBackTitleStyle: {
                width: 100
            },
            headerRight: <View style={{ height: 40, width: 100 }} >
            </View>,
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                height: 50,
                paddingTop: getStatusBarHeight(true)
            },
            headerTitleStyle: {
                fontSize: 18,
                textAlign: 'center',
                flex: 2
            }

        })
    }
)

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: MainNavigator,

        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
        mode: 'card',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(2)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });
                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')


@connect(({ router, statusBar }) => ({ router, statusBar }))
class Router extends PureComponent {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandle)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
    }
    backHandle = () => {
        const currentScreen = getActiveRouteName(this.props.router)
        if (currentScreen === 'Login') {
            return true
        }
        if (currentScreen !== 'Home') {
            this.props.dispatch(NavigationActions.back())
            return true
        }
        return false
    }
    componentWillReceiveProps(nextProps) {
        const { dispatch, router, statusBar } = nextProps;
        const currentScreen = getActiveRouteName(this.props.router)
        const nextScreen = getActiveRouteName(router);
        if (nextScreen == 'Part' && currentScreen != 'Part' && statusBar.barStyle != "dark-content") {
            dispatch(createAction('statusBar/changeStatusBar')({ barStyle: "dark-content" }));
        }
        if (nextScreen != 'Part' && currentScreen == 'Part' && statusBar.barStyle != "light-content") {
            dispatch(createAction('statusBar/changeStatusBar')({ barStyle: "light-content" }));
        }
    }
    render() {
        const { dispatch, router, statusBar } = this.props;
        return (<SafeAreaView style={{ flex: 1 }} >
            <StatusBar {...statusBar} />
            <App dispatch={dispatch} state={router} />
        </SafeAreaView>)
    }
}
// 
export default Router
