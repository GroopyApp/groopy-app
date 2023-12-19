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
    host: 'http://68.183.125.135/v1',
    authEndpoint: '/auth',
    requestEndpoint: '/request',
    chatEndpoint: '/chat'
}

export const PUBNUB_CONFIG = {
    publishKey: 'pub-c-dbb19108-b72c-4c11-82c1-ae22896f203d',
    subscribeKey: 'sub-c-7f2c8668-6e8f-44ef-b387-cb7882fd63f1',
}
