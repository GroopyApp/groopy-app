import React, {useEffect, useState} from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./views/Home/HomeScreen";
import SearchScreen from "./views/Search/SearchScreen";
import ChatsScreen from "./views/Chats/ChatsScreen";
import ProfileScreen from "./views/Profile/ProfileScreen";
import { UserContext } from "./context/contexts";
import { NAVIGATION_ICONS } from "./configs/constants";
import './assets/fundations.css'
import SessionService from "./services/SessionService";
import LoginScreen from "./views/Login/LoginScreen";
import {ActivityIndicator } from "react-native";
import { UserSession } from "./context/types";
import {
    setCustomView,
    setCustomTextInput,
    setCustomText,
    setCustomImage,
    setCustomTouchableOpacity
} from 'react-native-global-props';
import TopicScreen from "./views/Topic/TopicScreen";

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

    const Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'rgba(51, 102, 255, 0.5)',
            background: 'rgba(250, 250, 250, 1)',
            card: 'rgba(250, 250, 250, 1)',
            text: 'rgba(51, 51, 51, 1)',
            border: 'var(--border-color)',
            notification: 'rgba(255, 193, 7, 0.5)',
        }
    };

    setupFoundation();

    const DEFAULT_TITLE_STYLE = {
        fontWeight: "var(--important-font-weight)",
        fontSize: "var(--primary-font-size)",
    };

    const HomeStackNavigator = () => {
        const HomeStack = createNativeStackNavigator(); // Usa createNativeStackNavigator fornito da @react-navigation/native-stack

        return (
            <HomeStack.Navigator initialRouteName="Home">
                {/*@ts-ignore*/}
                <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Your topics around', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <HomeStack.Screen name="Topic" component={TopicScreen} options={{ title: 'Topic details', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
            </HomeStack.Navigator>
        )
    }

    const SearchStackNavigator = () => {
        const SearchStack = createNativeStackNavigator(); // Usa createNativeStackNavigator fornito da @react-navigation/native-stack

        return (
            <SearchStack.Navigator initialRouteName="Search">
                {/*@ts-ignore*/}
                <SearchStack.Screen name="Search" component={SearchScreen} options={{ title: 'Discover', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
                {/*@ts-ignore*/}
                <SearchStack.Screen name="Topic" component={TopicScreen} options={{ title: 'Topic details', headerTitleStyle: DEFAULT_TITLE_STYLE }}/>
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

function setupFoundation() {
    const customViewProps = {
        style: {
            backgroundColor: 'var(--background-color)' // light gray
        }
    };

    const customTextProps = {
        style: {
            fontSize: 16,
            fontFamily: 'var(--primary-font-family)',
            color: 'var(--text-color)'
        }
    };

    const customImageProps = {
        resizeMode: 'cover'
    };

    const customTouchableOpacityProps = {
        hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
    };

// Calling the functions and passing the custom props into their respective params
    setCustomView(customViewProps);
    // setCustomTextInput(customTextInputProps);
    setCustomText(customTextProps);
    setCustomImage(customImageProps);
    setCustomTouchableOpacity(customTouchableOpacityProps);
}

