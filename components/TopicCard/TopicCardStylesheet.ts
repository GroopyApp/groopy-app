import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {ExtraThemeColors, Theme} from "../../configs/fundation";

export const TOPIC_CARD_STYLES = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 'var(--small-spacing)',
        marginTop: 'var(--small-spacing)',
        marginHorizontal: 'var(--tiny-spacing)',
        borderRadius: 12,
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
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
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
    alreadySubscribedInfo: {
        borderStyle: "solid",
        width: "fit-content",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 8,
        fontSize: 12,
    } as TextStyle
})
