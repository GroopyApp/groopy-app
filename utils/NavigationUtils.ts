import {Topic} from "../types/rest";

export const goToTopicStack = (navigation, topic: Topic) => {
    navigation.navigate('TopicStack', {
        screen:"Topic",
        params:{topic: topic}
    })
}