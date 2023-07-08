import React from "react"
import { Text, ScrollView } from 'react-native';
import {SCREEN_VIEW_STYLES} from "../../configs/constants";

export default function ProfileScreen() {
    return (
        <ScrollView style={SCREEN_VIEW_STYLES}>
            <Text>Profile</Text>
        </ScrollView>
    );
}