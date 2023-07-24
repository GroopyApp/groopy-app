import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {ExtraThemeColors, Theme} from "../../configs/fundation";

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
    actions: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
    } as ViewStyle,
    button: {
        width: "45%",
        height: 40,
        marginHorizontal: 5,
        borderRadius: 3,
        backgroundColor: Theme.colors.primary,
        textAlign: "center",
        justifyContent: "center"
    },
    buttonTextContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    buttonIcon: {
        color: Theme.colors.card,
        fontSize: 24,
        marginRight: 4,
    },
    buttonText: {
        color: Theme.colors.card,
        fontWeight: "bold",
    } as TextStyle,
    events: {} as ViewStyle
});