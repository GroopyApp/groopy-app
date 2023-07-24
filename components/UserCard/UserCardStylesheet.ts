import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";

export const USER_CARD_STYLES = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'var(--small-spacing)',
        marginHorizontal: 'var(--tiny-spacing)',
        backgroundColor: 'var(--card-color)',
        justifyContent: "center"
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 'var(--normal-spacing)',
        borderRadius: 50
    } as ImageStyle,
    content: {
        flex: 1,
        textAlign: "left"
    } as ViewStyle,
    name: {
        color: 'var(--text-color)',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 'var(--medium-spacing)'
    } as TextStyle,
    username: {
        color: 'var(--text-color)',
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 'var(--medium-spacing)'
    } as TextStyle,

})
