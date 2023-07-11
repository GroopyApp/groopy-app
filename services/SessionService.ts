import AsyncStorage from '@react-native-async-storage/async-storage'
import {UserSession} from "../context/types";

const USER_SESSION_KEY = 'userSession';

const SessionService = {
    retrieveSession: async (): Promise<UserSession | null> => {
        const session = await AsyncStorage.getItem(USER_SESSION_KEY);
        return session ? JSON.parse(session) : null;
    },
    storeSession: async (session: UserSession): Promise<void> => {
        await AsyncStorage.setItem(USER_SESSION_KEY, JSON.stringify(session));
    },
}

AsyncStorage.setItem(USER_SESSION_KEY, JSON.stringify( {
    username: 'test8',
        email: 'test8@test.com',
    firstName: 'Test',
    lastName: 'De Test',
    imageUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    token: '1234567890'
}));

export default SessionService;
