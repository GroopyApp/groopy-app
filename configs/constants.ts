import { ViewStyle } from "react-native";

export const NAVIGATION_ICONS = {
    "HomeStack": {
        normal: 'home',
        outline: 'home-outline'
    },
    "SearchStack": {
        normal: 'search',
        outline: 'search-outline'
    },
    "ChatsStack": {
        normal: 'chatbubble',
        outline: 'chatbubble-outline'
    },
    "ProfileStack": {
        normal: 'person',
        outline: 'person-outline'
    },
}

export const SCREEN_VIEW_STYLES = {flex: 1, margin: "var(--medium-spacing)"} as ViewStyle;

export const FIXED_TOP_HEADER_STYLES = {zIndex: 100, marginBottom: 'var(--small-spacing)'} as ViewStyle;

export const SCROLLABLE_BODY_STYLES = {zIndex: 1} as ViewStyle;

export const TITLE_TEXT_STYLES = {fontSize: 24, fontWeight: 'bold'} as ViewStyle;

export const SUBTITLE_TEXT_STYLES = {fontSize: 16, fontWeight: 'bold'} as ViewStyle;

export const GATEWAY_CONFIG = {
    host: 'http://159.223.250.132/v1',
    authEndpoint: '/auth',
    requestEndpoint: '/request',
}