import {StyleSheet} from "react-native";

export const MESSAGE_BUBBLE_STYLES = StyleSheet.create({
    container: {
        marginVertical: 4,
    },
    senderInfo: {
        alignItems: 'center',
    },
    senderImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    senderName: {
        fontWeight: 'bold',
    },
    messageBubble: {
        flex: 1,
        flexWrap: "wrap",
        borderRadius: 16,
        padding: 12,
        maxWidth: '70%',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
        color: '#000',
    },
});
