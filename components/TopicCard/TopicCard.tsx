import React from 'react';
import type { Topic } from '../../types/rest';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, Text, View} from "react-native";
import ReadChip from "../ReadChip/ReadChip";
import {useTheme} from "@react-navigation/native";
import {TOPIC_CARD_STYLES} from "./TopicCardStylesheet";

type TopicCardProps = {
    topic: Topic;
    onClick: () => void;
};

const TopicCard = ({ topic, onClick }: TopicCardProps) => {
    const { imageUrl, name, description, language } = topic;

    const truncateDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    const { colors } = useTheme();

    const truncatedDescription = truncateDescription(description, 200);

    return (
        <View onTouchEnd={onClick} style={TOPIC_CARD_STYLES.container}>
                <Image style={TOPIC_CARD_STYLES.image} source={{uri: imageUrl}} />
                <View style={TOPIC_CARD_STYLES.content}>
                    <Text style={TOPIC_CARD_STYLES.title}>{name}</Text>
                    <Text style={TOPIC_CARD_STYLES.description}>{truncatedDescription}</Text>
                </View>
                <View style={TOPIC_CARD_STYLES.language}>
                    <ReadChip
                        backgroundColor={colors.notification}
                        textColor={colors.text}
                        label={topic.language}
                        icon={<Icon
                            name="globe-outline"
                            size={16} />}
                    />
                </View>
        </View>
    );
};

export default TopicCard;
