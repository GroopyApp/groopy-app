export type UserSession = {
    token: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    topicChatRooms: string[];
    eventChatRooms: string[];
}