import {StyleSheet} from "react-native";

export const LOGIN_SCREEN_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff',
    },
    input: {
        fontSize: 16,
    },
    loginButton: {
        width: '80%',
        paddingVertical: 12,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
