import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";

export const EVENT_CARD_STYLES = StyleSheet.create({
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
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 'var(--medium-spacing)'
    } as TextStyle,

    date: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginBottom: 2,
    } as ViewStyle,
    dateIcon: {
        color: 'var(--text-color)',
        fontSize: 14,
    },
    dateText: {
        color: 'var(--text-color)',
        fontSize: 14,
    },

    location: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
    } as ViewStyle,
    locationAddress: {
        color: 'var(--border-color)',
        fontSize: 14,
    } as TextStyle,
    locationIcon: {
        color: 'var(--border-color)',
        fontSize: 14,
    } as ImageStyle,

    participants: {
        position: 'absolute',
        top: 4,
        right: 2,
        alignItems: 'center'
    } as ViewStyle,
    participantsIcon: {
        marginRight: 8,
        fontSize: 24,
    }
})
