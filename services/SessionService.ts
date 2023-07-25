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
};

export default SessionService;
