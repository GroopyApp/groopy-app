import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { MESSAGE_BUBBLE_STYLES } from "./MessageBubbleStylesheet";

const MessageBubble = ({ message, senderName, senderImage, isUserMessage }) => {
    const windowWidth = Dimensions.get('window').width;
    const maxBubbleWidth = windowWidth * 0.7;

    const defineBubbleWidth = (messageLength: number) => {
        let multiplier = 0;
        if (messageLength <= 10) {
            multiplier = 2;
        } else if (messageLength <= 30) {
            multiplier = 4;
        } else {
            multiplier = 8;
        }
        return Math.min(message.length * multiplier, maxBubbleWidth);
    }

    const backgroundColor = isUserMessage ? "#DCF8C6" : "#e5e5ea";

    return (
        <View style={[{flexDirection: isUserMessage ? "row-reverse" : "row"}, MESSAGE_BUBBLE_STYLES.container]}>
            <View style={[MESSAGE_BUBBLE_STYLES.senderInfo, isUserMessage ? {marginRight: 8} : {marginLeft: 8}]}>
                <View style={MESSAGE_BUBBLE_STYLES.senderImage}>
                    <View
                        style={[
                            MESSAGE_BUBBLE_STYLES.avatar,
                            { backgroundColor: senderImage },
                        ]}
                    />
                </View>
            </View>
            <View style={[MESSAGE_BUBBLE_STYLES.messageBubble, { width: defineBubbleWidth(message.length)}, {backgroundColor: backgroundColor}]}>
                <Text style={MESSAGE_BUBBLE_STYLES.senderName}>{senderName}</Text>
                <Text style={MESSAGE_BUBBLE_STYLES.messageText}>{message}</Text>
            </View>
        </View>
    );
};

export default MessageBubble;
