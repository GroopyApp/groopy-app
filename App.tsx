import React, { useState } from "react"
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./views/Home/HomeScreen";
import SearchScreen from "./views/Search/SearchScreen";
import ChatsScreen from "./views/Chats/ChatsScreen";
import ProfileScreen from "./views/Profile/ProfileScreen";
import { UserContext } from "./context/contexts";
import { NAVIGATION_ICONS } from "./configs/constants";
import './assets/global.css'
import SessionService from "./services/SessionService";
import LoginScreen from "./views/Login/LoginScreen";
import {ActivityIndicator} from "react-native";
import {UserSession} from "./context/types";
export default function App() {

    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<UserSession | null>(null);

    const Nav = createBottomTabNavigator();
    const Theme = {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                primary: 'rgba(51, 102, 255, 0.5)',
                background:'rgba(250, 250, 250, 1)',
                card: 'rgba(250, 250, 250, 1)',
                text: 'rgba(51, 51, 51, 1)',
                border: 'var(--border-color)',
                notification: 'rgba(255, 193, 7, 0.5)',
            }
        };

    const DEFAULT_TITLE_STYLE = {
            fontWeight: "var(--important-font-weight)",
            fontSize: "var(--primary-font-size)",
        };

    SessionService.retrieveSession().then((session) => {
        setLoading(false);
        setSession(session);
    });

    return (
        <>
            { loading ? <ActivityIndicator /> :
                session ?
                <UserContext.Provider value={session}>
                    <NavigationContainer theme={Theme}>
                            <Nav.Navigator screenOptions={({route }) => ({
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
                                <Nav.Screen name="Home" component={HomeScreen} options={{ title: 'Your topics around', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
                                {/*@ts-ignore*/}
                                <Nav.Screen name="Search" component={SearchScreen} options={{ title: 'Discover', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
                                {/*@ts-ignore*/}
                                <Nav.Screen name="Chats" component={ChatsScreen} options={{ title: 'Conversations', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
                                {/*@ts-ignore*/}
                                <Nav.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
                            </Nav.Navigator>
                        </NavigationContainer>
                </UserContext.Provider>
                :
                <LoginScreen />
            }
            </>
    );
}
