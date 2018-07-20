import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const List = ({ border, borderColor, children }) => (<View style={[styles.listContainer, border && styles.listBorder, { borderColor: borderColor }]}>
    {React.Children.map(children, (child, index) => {
        return (<View style={[styles.itemContainer, (Object.prototype.toString.call(children) == '[object Object]' || index == children.length - 1) && { borderBottomWidth: 0 }]} >
            {child}
        </View>)
    })}
</View>)
List.defaultProps = {
    border: true,
    borderColor: "#f4f1fc",
}
List.propTypes = {
    border: PropTypes.bool,
    borderColor: PropTypes.string,
}

const Item = ({ icon, title, content, extra, arrowIcon, onPress }) => (<TouchableOpacity onPress={onPress} ><View style={styles.item} >
    {icon}
    <View style={styles.itemContent}>
        {title ? <Text style={styles.itemTitle}>{title}</Text> : null}
        {content ? <Text style={styles.itemText} >{content}</Text> : null}
    </View>
    {extra ? <View style={styles.itemExra} >{typeof extra == 'string' ? <Text style={styles.extraText}  >{extra}</Text> : extra}</View> : null}
    {arrowIcon ? <View style={styles.arrowIcon}  >{arrowIcon}</View> : null}
</View>
</TouchableOpacity>)
Item.propTypes = {
    icon: PropTypes.element,
    arrowIcon: PropTypes.element
}
const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#fff',
        paddingLeft: 13,
    },
    listBorder: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    itemContainer: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#f4f1fc",
        paddingRight: 13,
        paddingVertical: 12,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemContent: {
        marginLeft: 6,
        flex: 1
    },
    itemTitle: {
        fontSize: 13,
        lineHeight: 20,
        color: "#444",
        includeFontPadding: false,
    },
    itemExra: {
        marginLeft: 6,
        color: "#555"
    },
    arrowIcon: {
        marginLeft: 6,
    },
    extraText: {
        color: "#555",
        fontSize: 12,
    },
    itemText: {
        fontSize: 11,
        lineHeight: 16,
        color: "#666"
    },

})

List.Item = Item;

export default List