import React, {useContext, useEffect, useState} from "react"
import {ScrollView, View} from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { SCREEN_VIEW_STYLE } from "../../configs/fundation";
import MessageBubble from "../../components/MessageBubble/MessageBubble";
import {ChatInfo} from "../../types/domain";
import {UserContext} from "../../context/contexts";
import ChatInput from "../../components/ChatInput/ChatInput";
import {CHAT_SCREEN_STYLES} from "./ChatScreenStylesheet";
import ChatService from "../../services/ChatService";
import {ChatMessage} from "../../types/pubnub";

export default function ChatScreen({navigation, route}) {

    const chatInfo: ChatInfo = route.params.chatInfo;
    const userSession = useContext(UserContext);
    const scrollViewRef = React.useRef<ScrollView>();
    
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const fireMessage = async (message) => {
        await ChatService.sendMessage(chatInfo.channelName, message, userSession!.username);
    }

    const handleMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    useEffect(() => {
        let isSubscribed = true;

        const subscribeToChannel = async () => {
            try {
                await ChatService.subscribe(chatInfo.channelName);
                ChatService.registerHandler(chatInfo.channelName, handleMessage);
                const history = await ChatService.getHistory(chatInfo.channelName);
                if (isSubscribed) {
                    setMessages(history);
                }
            } catch (error) {
                console.log('There was an error trying to subscribe to channel:', error);
            }
        };

        const unsubscribeFromChannel = async () => {
            try {
                await ChatService.unsubscribe(chatInfo.channelName);
                ChatService.removeHandler(chatInfo.channelName);
            } catch (error) {
                console.log('Errore durante la disconnessione dal channel:', error);
            }
        };

        navigation.addListener('focus', async () => {
            navigation.setOptions({
                title: chatInfo.chatName,
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => {
                            navigation.replace('Chats');
                        }}
                    />
                )
            });
            await subscribeToChannel();
        });

        navigation.addListener('blur', async () => {
            await unsubscribeFromChannel();
        });

        return () => {
            isSubscribed = false;
        };
    }, [chatInfo.channelName, navigation]);

    return (
        <View style={CHAT_SCREEN_STYLES.container}>
            <ScrollView
                // @ts-ignore
                ref={scrollViewRef}
                style={SCREEN_VIEW_STYLE}
                contentContainerStyle={CHAT_SCREEN_STYLES.chatContainer}
                onContentSizeChange={() => {
                  scrollViewRef.current?.scrollToEnd({ animated: true })}} >
                {messages.map((message: ChatMessage) =>
                    <MessageBubble
                        key={message.timetoken}
                        message={message.message.text}
                        senderName={message.publisher}
                        senderImage={userSession?.username === message.publisher ? "#bbb" : "#007BFF"}
                        isUserMessage={userSession?.username === message.publisher}
                    />)}
            </ScrollView>
            <ChatInput onSendMessage={fireMessage} />
        </View>
    );
}