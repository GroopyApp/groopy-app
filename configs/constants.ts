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

export const GATEWAY_CONFIG = {
    host: 'http://159.223.250.132/v1',
    authEndpoint: '/auth',
    requestEndpoint: '/request',
}