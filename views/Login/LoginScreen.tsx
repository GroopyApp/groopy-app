import React, {useState} from 'react';
import * as Updates from 'expo-updates';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LOGIN_SCREEN_STYLES } from './LoginScreenStylesheet';
import GatewayService from "../../services/GatewayService";


export default function LoginScreen({onSuccess}) {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = () => {
        GatewayService.login({email: username, password})
            .then(async (response) => {
                onSuccess();
            });
    }

    return (
        <View style={LOGIN_SCREEN_STYLES.container}>
            {/*<Image*/}
            {/*    style={LOGIN_SCREEN_STYLES.logo}*/}
            {/*    source={require('./your_logo.png')}*/}
            {/*/>*/}
            <View style={LOGIN_SCREEN_STYLES.inputContainer}>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    style={LOGIN_SCREEN_STYLES.input}
                    placeholder="Email or Username"
                />
            </View>
            <View style={LOGIN_SCREEN_STYLES.inputContainer}>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={LOGIN_SCREEN_STYLES.input}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={LOGIN_SCREEN_STYLES.loginButton} onPress={login}>
                <Text style={LOGIN_SCREEN_STYLES.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};
