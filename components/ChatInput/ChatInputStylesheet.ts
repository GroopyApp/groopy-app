import { StyleSheet } from 'react-native';

export const CHAT_INPUT_STYLES = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    input: {
        flex: 1,
        minHeight: 40,
        maxHeight: 120,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        marginRight: 8,
    },
    sendButton: {
        padding: 8,
    },
});