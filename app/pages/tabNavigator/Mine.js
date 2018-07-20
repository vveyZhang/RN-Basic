import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { createAction, getStatusBarHeight, dimen } from '../../utils'
import theme from '../../common/theme'
import List from '../../components/List';
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../../components/Button'
import Toast from '../../components/Toast'
const { height } = dimen
const statusBarHeight = getStatusBarHeight(true);
const Item = List.Item;
@connect()
export default class Mine extends Component {
    render() {
        return (
            <View style={[theme.safeContainer, theme.themeBg]} >
                <View style={styles.statusBar} ></View>
                <ScrollView style={{ height: height - statusBarHeight }} >
                    <View style={styles.header} >
                        <View style={styles.headerContent} >
                            <Image style={styles.avatar} source={require('../../images/avatar.jpg')} />
                            <View>
                                <Text style={styles.userName} >John</Text>
                                <Text style={styles.userEmail} >John@gantsoftware.com</Text>
                            </View>
                        </View>
                        <Image source={require('../../images/mine-bg.png')} resizeMode='cover' style={styles.headerBg} />
                    </View>
                    <List border={false} >
                        <Item
                            onPress={() => Toast('提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示', <Image style={styles.avatar} source={require('../../images/avatar.jpg')} />)}
                            icon={<Icon name="cog" size={16} color={theme.activeColor} ></Icon>}
                            title={<Text style={{ color: theme.activeColor }}>用户设置</Text>}
                            arrowIcon={<Icon name="angle-right" size={16} color="#777" ></Icon>}
                        />
                    </List>
                    <View style={{ marginTop: 30, marginBottom: 20 }} >
                        <List border={false} >
                            <Item
                                icon={<Icon name="cog" size={16} color={theme.activeColor} ></Icon>}
                                title={<Text style={{ color: theme.activeColor }}>用户设置</Text>}
                                arrowIcon={<Icon name="angle-right" size={16} color="#777" ></Icon>}
                            />
                            <Item
                                icon={<Icon name="cog" size={16} color={theme.activeColor} ></Icon>}
                                title={<Text style={{ color: theme.activeColor }}>用户设置</Text>}
                                arrowIcon={<Icon name="angle-right" size={16} color="#777" ></Icon>}
                            />
                            <Item
                                icon={<Icon name="cog" size={16} color={theme.activeColor} ></Icon>}
                                title={<Text style={{ color: theme.activeColor }}>用户设置</Text>}
                                arrowIcon={<Icon name="angle-right" size={16} color="#777" ></Icon>}
                            />
                        </List>
                    </View>
                    <Button style={styles.button} textStyle={styles.buttonStyle} >退出登录</Button>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    statusBar: {
        height: statusBarHeight,
        backgroundColor: "rgba(89,52,253,1)"
    },
    header: {
        height: 250,
        backgroundColor: '#5934fd',
    },
    headerBg: {
        height: 100,
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 1
    },
    headerContent: {
        zIndex: 2,
        marginTop: 30,
        alignItems: 'center',
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden',
        shadowColor: '#fff',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        borderColor: '#fff',
        borderWidth: 1,
    },
    userName: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        letterSpacing: 1
    }
    , userEmail: {
        fontSize: 10,
        color: "#fff",
        textAlign: 'center',
        letterSpacing: 1
    },
    button: {
        backgroundColor: "#fff",
        height: 50,
        marginBottom: 40,
        borderRadius: 0,
        borderWidth: 0,
    },
    buttonStyle: {
        color: "#e70000",
        fontSize: 12,
    }
})