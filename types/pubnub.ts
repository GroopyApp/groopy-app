export type ChatMessage = {
    channel: string;
    message: MessageText;
    publisher: string;
    actualChannel?: string;
    subscribedChannel?: string;
    subscription?: string;
    timetoken?: string;
    userMetadata?: any;
}

export type MessageText = {
    text: string;
}