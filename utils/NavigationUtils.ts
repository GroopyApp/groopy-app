import {Topic} from "../types/rest";
import {ChatInfo} from "../types/domain";

export const goToTopicStack = (navigation, topic: Topic) => {
    navigation.navigate('TopicStack', {
        screen:"Topic",
        params:{topic: topic}
    })
}

export const goToChat = (navigation, chatInfo: ChatInfo) => {
    navigation.navigate('ChatsStack', {screen: 'Chat', params: {chatInfo}});
}