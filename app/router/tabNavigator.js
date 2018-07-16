import { createBottomTabNavigator } from 'react-navigation';
import Home from '../pages/tabNavigator/Home.js'
const TabNavigator = createBottomTabNavigator({
    Home: { screen: Home }
})

export default TabNavigator