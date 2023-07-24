import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {ExtraThemeColors, Theme} from "../../configs/fundation";

export const EVENT_SCREEN_STYLES = StyleSheet.create({
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
    head: {
        width: '100%',
    } as ViewStyle,
    headImage: {
        height: 350,
        zIndex: 1
    } as ImageStyle,
    headChip: {
        position: "absolute",
        bottom: 4,
        right: 4,
        zIndex: 2,
    } as ViewStyle,
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
    info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 8,
    } as ViewStyle,
    infoIcon: {
        fontSize: 24,
        marginRight: 12,
    } as ImageStyle,
    infoText: {
        fontSize: 24,
        fontWeight: "bold"
    } as TextStyle,
    participants: {} as ViewStyle
});