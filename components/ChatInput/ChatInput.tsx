import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CHAT_INPUT_STYLES } from "./ChatInputStylesheet";

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    return (
        <View style={CHAT_INPUT_STYLES.container}>
            <TextInput
                style={CHAT_INPUT_STYLES.input}
                placeholder="Scrivi un messaggio..."
                value={message}
                onChangeText={setMessage}
                multiline
            />
            <TouchableOpacity style={CHAT_INPUT_STYLES.sendButton} onPress={handleSendMessage}>
                <Ionicons name="send" size={24} color="#007BFF" />
            </TouchableOpacity>
        </View>
    );
};

export default ChatInput;
