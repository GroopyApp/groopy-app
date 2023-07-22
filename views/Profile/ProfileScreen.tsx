import React from "react"
import { Text, ScrollView } from 'react-native';
import { SCREEN_VIEW_STYLE } from "../../configs/fundation";

export default function ProfileScreen() {
    return (
        <ScrollView style={SCREEN_VIEW_STYLE}>
            <Text>Profile</Text>
        </ScrollView>
    );
}