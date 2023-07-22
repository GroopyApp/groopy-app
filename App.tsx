import React, {useEffect, useState} from "react";
import {ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./views/Home/HomeScreen";
import SearchScreen from "./views/Search/SearchScreen";
import ChatsScreen from "./views/Chats/ChatsScreen";
import ProfileScreen from "./views/Profile/ProfileScreen";
import LoginScreen from "./views/Login/LoginScreen";
import TopicScreen from "./views/Topic/TopicScreen";
import { UserContext } from "./context/contexts";
import { UserSession } from "./context/types";
import { NAVIGATION_ICONS } from "./configs/constants";
import SessionService from "./services/SessionService";
import { DEFAULT_SCREEN_TITLE_STYLE, setupFoundation, Theme } from "./configs/fundation";
import './assets/fundations.css'

export default function App() {

    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<UserSession | null>(null);


    useEffect(() => {
        SessionService.retrieveSession().then((session) => {
            setLoading(false);
            setSession(session);
        });
    }, []);

    const Nav = createBottomTabNavigator();

    setupFoundation();

    const HomeStackNavigator = () => {
        const HomeStack = createNativeStackNavigator(); // Usa createNativeStackNavigator fornito da @react-navigation/native-stack

        return (
            <HomeStack.Navigator initialRouteName="Home">
                {/*@ts-ignore*/}
                <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Your topics around', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <HomeStack.Screen name="Topic" component={TopicScreen} options={{ title: 'Topic details', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
            </HomeStack.Navigator>
        )
    }

    const SearchStackNavigator = () => {
        const SearchStack = createNativeStackNavigator(); // Usa createNativeStackNavigator fornito da @react-navigation/native-stack

        return (
            <SearchStack.Navigator initialRouteName="Search">
                {/*@ts-ignore*/}
                <SearchStack.Screen name="Search" component={SearchScreen} options={{ title: 'Discover', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <SearchStack.Screen name="Topic" component={TopicScreen} options={{ title: 'Topic details', headerTitleStyle: DEFAULT_SCREEN_TITLE_STYLE }}/>
            </SearchStack.Navigator>
        )
    }

    return (
        <>
            { loading ? <ActivityIndicator /> :
                session ?
                    <UserContext.Provider value={ session }>
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
                                {/*@ts-ignore*/}
                                <Nav.Screen name="HomeStack" component={HomeStackNavigator} options={{headerShown: false}}/>
                                {/*@ts-ignore*/}
                                <Nav.Screen name="SearchStack" component={SearchStackNavigator} options={{headerShown: false}}/>
                                {/*@ts-ignore*/}
                                <Nav.Screen name="ChatsStack" component={ChatsScreen} options={{headerShown: false}}/>
                                {/*@ts-ignore*/}
                                <Nav.Screen name="ProfileStack" component={ProfileScreen} options={{headerShown: false}}/>
                            </Nav.Navigator>
                        </NavigationContainer>
                    </UserContext.Provider>
                    :
                    <LoginScreen />
            }
        </>
    );
}
