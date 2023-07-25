import React, {useEffect, useState} from "react";
import {ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PubNubProvider } from 'pubnub-react';
import { UserContext } from "./context/contexts";
import { UserSession } from "./context/types";
import SessionService from "./services/SessionService";
import ChatService from "./services/ChatService";
import HomeScreen from "./views/Home/HomeScreen";
import SearchScreen from "./views/Search/SearchScreen";
import ChatsScreen from "./views/Chats/ChatsScreen";
import ProfileScreen from "./views/Profile/ProfileScreen";
import LoginScreen from "./views/Login/LoginScreen";
import TopicScreen from "./views/Topic/TopicScreen";
import EventScreen from "./views/Event/EventScreen";
import ChatScreen from "./views/Chat/ChatScreen";
import { NAVIGATION_ICONS } from "./configs/constants";
import { DEFAULT_SCREEN_TITLE_STYLE, setupFoundation, Theme } from "./configs/fundation";
import Icon from 'react-native-vector-icons/Ionicons';
import './assets/fundations.css'

export default function App() {

    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<UserSession | null>(null);

    useEffect(() => {
        setupFoundation();
        SessionService.retrieveSession().then(async (session) => {
            setLoading(false);
            setSession(session);
            await ChatService.init(session!);
        });
    }, []);

    const TopicStackNavigator = () => {
        const TopicStack = createNativeStackNavigator();

        return (
            <TopicStack.Navigator initialRouteName="Topic">
                {/*@ts-ignore*/}
                <TopicStack.Screen name="Topic" component={TopicScreen} options={{ title: 'Topic details', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <TopicStack.Screen name="Event" component={EventScreen} options={{ title: 'Event details', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
            </TopicStack.Navigator>
        )
    }

    const HomeStackNavigator = () => {
        const HomeStack = createNativeStackNavigator(); // Usa createNativeStackNavigator fornito da @react-navigation/native-stack

        return (
            <HomeStack.Navigator initialRouteName="Home">
                {/*@ts-ignore*/}
                <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Your topics around', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <HomeStack.Screen name="TopicStack" component={TopicStackNavigator} options={{ title: 'Topic details', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE, headerShown: false }}/>
            </HomeStack.Navigator>
        )
    }

    const ChatStackNavigator = () => {
        const ChatStack = createNativeStackNavigator(); // Usa createNativeStackNavigator fornito da @react-navigation/native-stack

        return (
            <ChatStack.Navigator>
                {/*@ts-ignore*/}
                <ChatStack.Screen name="Chats" component={ChatsScreen} options={{ title: 'Conversations', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <ChatStack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
            </ChatStack.Navigator>
        )
    }

    const SearchStackNavigator = () => {
        const SearchStack = createNativeStackNavigator(); // Usa createNativeStackNavigator fornito da @react-navigation/native-stack

        return (
            <SearchStack.Navigator initialRouteName="Search">
                {/*@ts-ignore*/}
                <SearchStack.Screen name="Search" component={SearchScreen} options={{ title: 'Discover', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <SearchStack.Screen name="TopicStack" component={TopicStackNavigator} options={{title: 'Topic details', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE, headerShown: false}}/>
            </SearchStack.Navigator>
        )
    }

    const Nav = createBottomTabNavigator();

    return (
        <>
            { loading ? <ActivityIndicator /> :
                session ?
                    <UserContext.Provider value={ session }>
                        <PubNubProvider client={ChatService.initClient(session.username)} >
                            <NavigationContainer theme={ Theme }>
                                <Nav.Navigator initialRouteName="HomeStack" screenOptions={({route }) => ({
                                    tabBarIcon: ({focused, color, size}) => <Icon
                                        name={NAVIGATION_ICONS[route.name][focused ? 'normal' : 'outline']}
                                        size={size}
                                        color={color}/>,
                                    tabBarShowLabel: false,
                                    headerShadowVisible: false,
                                    tabBarActiveTintColor: 'var(--primary-color)',
                                    tabBarInactiveTintColor: 'var(--text-color)',
                                })}>
                                    <Nav.Screen name="HomeStack" component={HomeStackNavigator} options={{headerShown: false}}/>
                                    <Nav.Screen name="SearchStack" component={SearchStackNavigator} options={{headerShown: false}}/>
                                    <Nav.Screen name="ChatsStack" component={ChatStackNavigator} options={{headerShown: false}}/>
                                    <Nav.Screen name="ProfileStack" component={ProfileScreen} options={{headerShown: false}}/>
                                </Nav.Navigator>
                            </NavigationContainer>
                        </PubNubProvider>
                    </UserContext.Provider>
                    :
                    <LoginScreen />
            }
        </>
    );
}
