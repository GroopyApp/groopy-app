import PubNub from "pubnub";
import {UserSession} from "../context/types";
import {PUBNUB_CONFIG} from "../configs/constants";
import {ChatMessage, MessageText} from "../types/pubnub";

let pubnub;
const messages: Record<string, ChatMessage[]> = {};
const subscribedChannels: string[] = [];
const channelHandlers = {};

const loadChats = async (topicChannels: string[], eventChannels: string[]) => {

    //FIXME
    // once we'll have login working, getting the session should also return topic and event chat channels, allowing to fetch the history on startup
    //
    // const result = await pubnub.fetchMessages({
    //     channels: channels,
    //     // start: "15343325214676133",
    //     // end: "15343325004275466",
    //     count: 1,
    // });
    // messages = result.channels;
}

const ChatService = {
    init: async (session: UserSession) => {
        await loadChats(session.topicChatRooms, session.eventChatRooms);
    },
    getHistory: async (channelId): Promise<ChatMessage[]> => {
        const result = await pubnub.fetchMessages({
            channels: [channelId],
            count: 50,
        });
        const history = result.channels[channelId].map((m) => ({
                channel: m.channel,
                message:m.message,
                publisher: m.uuid,
                timetoken: m.timetoken,
            }
        ));
        return history || [];
    },
    initClient: (userId: string) => {
        try {
            pubnub = new PubNub({
                publishKey: PUBNUB_CONFIG.publishKey,
                subscribeKey: PUBNUB_CONFIG.subscribeKey,
                userId: userId,
            });
        } catch (status) {
            console.log(status);
        }
        return pubnub;
    },
    sendMessage: async (channel: string, message: string, sender: string) => {
        return pubnub.publish({
            channel: channel,
            message: {
                text: message,
            }
        });
    },
    subscribe: async (channel: string) => {
        await pubnub.subscribe({
            channels: [channel],
        });
        addIfMissing(channel);
    },
    unsubscribe: async (channel: string) => {
        removeIfPresent(channel);
        await pubnub.unsubscribe({
            channels: [channel],
        });
    },
    registerHandler: (channel, callback) => {
        channelHandlers[channel] = {
            message: (m) => {
                if (m.channel === channel) {
                    callback(m);
                }
            },
        };
        pubnub.addListener(channelHandlers[channel]);
    },
    removeHandler: (channel) => {
        pubnub.removeListener(channelHandlers[channel]);
    },
}

const addIfMissing = (channel: string) => {
    if (!subscribedChannels.includes(channel)) {
        subscribedChannels.push(channel);
    }
}

const removeIfPresent = (channel: string) => {
    const index = subscribedChannels.indexOf(channel);
    if (index > -1) {
        subscribedChannels.splice(index, 1);
    }
}

export default ChatService;