import {StyleSheet, ViewStyle} from "react-native";

export const TOPIC_SCREEN_STYLES = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        marginRight: 8,
        paddingHorizontal: 12,
        height: 32,
        borderWidth: 1,
        width: 'var(--gorgeous-spacing)',
    } as ViewStyle,
    input: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        width: '100%'
    },
});