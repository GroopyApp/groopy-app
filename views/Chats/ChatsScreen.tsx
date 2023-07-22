import React from "react"
import { Text, ScrollView } from 'react-native';
import { SCREEN_VIEW_STYLE } from "../../configs/fundation";

export default function ChatsScreen() {
    return (
        <ScrollView style={SCREEN_VIEW_STYLE}>
            <Text>Chat</Text>
        </ScrollView>
    );
}