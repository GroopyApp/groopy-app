import React from "react"
import { Text, ScrollView } from 'react-native';
import {SCREEN_VIEW_STYLES} from "../../configs/constants";

export default function LoginScreen() {
    return (
        <ScrollView style={SCREEN_VIEW_STYLES}>
            <Text>Login</Text>
        </ScrollView>
    );
}