import {StyleSheet, ViewStyle} from "react-native";

export const NAVIGATION_ICONS = {
    "Home": {
        normal: 'home',
        outline: 'home-outline'
    },
    "Search": {
        normal: 'search',
        outline: 'search-outline'
    },
    "Chats": {
        normal: 'chatbubble',
        outline: 'chatbubble-outline'
    },
    "Profile": {
        normal: 'person',
        outline: 'person-outline'
    },
}

export const SCREEN_VIEW_STYLES = {flex: 1, margin: "var(--medium-spacing)"} as ViewStyle;

export const FIXED_TOP_HEADER_STYLES = {zIndex: 100, marginBottom: 'var(--small-spacing)'} as ViewStyle;

export const SCROLLABLE_BODY_STYLES = {zIndex: 1} as ViewStyle;

export const GATEWAY_CONFIG = {
    host: 'http://159.223.250.132/v1',
    authEndpoint: '/auth',
    requestEndpoint: '/request',
}