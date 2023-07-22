import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";

export const TOPIC_SCREEN_STYLES = StyleSheet.create({
    container: {
        marginHorizontal: 6
    } as ViewStyle,
    titleText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 'var(--small-spacing)',
        alignSelf: 'center'
    } as TextStyle,
    subtitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 'var(--small-spacing)'
    } as TextStyle,
    contentText: {
        fontSize: 16,
        margin: 'var(--small-spacing)'
    } as TextStyle,
    image: {
        width: '100%',
        height: 350
    } as ImageStyle,
    tagsStack: {
        margin: 'var(--small-spacing)',
        marginLeft: 'var(--normal-spacing)'
    } as ViewStyle,
    leadingIcon: {
        marginRight: 8,
        fontSize: 24,
    } as ImageStyle,
    events: {} as ViewStyle
});