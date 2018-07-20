import { StyleSheet } from 'react-native'

const theme = StyleSheet.create({
    safeContainer: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    container: {
        marginHorizontal: 30,
    },
    padding: {
        paddingHorizontal: '13',
        paddingVertical: '0',
    },
    themeBg: {
        backgroundColor: "#f4f1fc",
    }
})

theme.activeColor = "#5934fd";
theme.color = "#333";

export default theme