export { NavigationActions } from 'react-navigation'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export function getActiveRouteName(navigationState) {
    if (!navigationState) {
        return null
    }
    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
        return getActiveRouteName(route)
    }
    return route.routeName
}

