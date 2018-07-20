import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux'
import theme from '../../../common/theme';
import { getStatusBarHeight, createAction } from '../../../utils'
import ScrollableTabBar from './ScrollableTabBar'
const StatusBarHeight = getStatusBarHeight();
@connect()
class Part extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(createAction('statusBar/changeStatusBar')({ barStyle: "dark-content" }))
  }
  render() {
    return (
      <ScrollableTabView
        style={[styles.barStyle]}
        tabBarActiveTextColor={theme.activeColor}
        tabBarInactiveTextColor={theme.color}
        tabStyle={styles.tabStyle}
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel='研发'>研发</Text>
        <Text tabLabel='采购'>采购</Text>
        <Text tabLabel='物流'>物流</Text>
      </ScrollableTabView>

    )
  }
}
const styles = StyleSheet.create({
  barStyle: {
    paddingTop: StatusBarHeight,
    height: 40,
    backgroundColor: '#fff',
    borderColor: theme.activeColor
  },
  tabBarTextStyle: {
    fontSize: 14,
  },
  tabStyle: {
    height: 39,
  },
  tabBarUnderlineStyle: {
    height: 2,
    backgroundColor: theme.activeColor
  }
})
export default Part