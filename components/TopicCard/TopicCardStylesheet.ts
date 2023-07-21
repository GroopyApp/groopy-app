import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";

export const TOPIC_CARD_STYLES = StyleSheet.create({
    container: {
        height: 'var(--huge-spacing)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBlock: 'var(--small-spacing)',
        marginTop: 'var(--small-spacing)',
        marginHorizontal: 'var(--tiny-spacing)',
        shadowRadius: 1.3,
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowColor: 'var(--primary-color-shadow)',
        backgroundColor: 'var(--card-color)'
    },
    image: {
        width: 'var(--huge-spacing)',
        height: 'var(--huge-spacing)',
        marginRight: 'var(--normal-spacing)',
        borderRadius: 2
    } as ImageStyle,
    content: {
        flex: 1,
        textAlign: "left"
    } as ViewStyle,
    title: {
        color: 'var(--text-color)',
        maxWidth: '70%',
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 'var(--medium-spacing)'
    } as TextStyle,
    description: {
        textAlign: 'left',
    } as TextStyle,
    language: {
        position: 'absolute',
        top: 4,
        right: 2,
        alignItems: 'center'
    } as ViewStyle,
})
