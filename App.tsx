import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./views/Home/HomeScreen";
import SearchScreen from "./views/Search/SearchScreen";
import ChatsScreen from "./views/Chats/ChatsScreen";
import ProfileScreen from "./views/Profile/ProfileScreen";
import {NAVIGATION_ICONS} from "./configs/constants";
import './assets/global.css'
export default function App() {
  const Nav = createBottomTabNavigator();

    const Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'var(--primary-color)',
            background:'var(--background-color)',
            card: 'var(card-color)',
            text: 'var(text-color)',
            border: 'var(--border-color)',
            notification: 'var(--notification-color)',
        }
    };

    const DEFAULT_TITLE_STYLE = {
        fontWeight: "var(--important-font-weight)",
        fontSize: "var(--primary-font-size)",
    };

    return (
        <NavigationContainer theme={Theme}>
          <Nav.Navigator screenOptions={({route }) => ({
            tabBarIcon: ({focused, color, size}) => <Ionicons
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
  );
}
