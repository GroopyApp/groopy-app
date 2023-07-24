import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {Theme} from "../../configs/fundation";

export const SEARCH_BAR_STYLES = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        height: "var(--big-spacing)",
        backgroundColor: "var(--input-color)",
        borderRadius: 2,
        padding: "var(--medium-spacing) var(--small-spacing)"
    } as ViewStyle,
    icon: {
        marginRight: "var(--small-spacing)"
    },
    input: {
        flex: 1,
        paddingBottom: "var(--tiny-spacing)",
        fontSize: 16,
        color: Theme.colors.text,
        width: "100%"
    } as TextStyle
});