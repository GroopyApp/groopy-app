import React from 'react';
import './TopicCard.css';
import type { Topic } from '../../types/rest';
import Ionicons from "react-native-vector-icons/Ionicons";
import {Text, View} from "react-native";
import {Chip} from "@react-native-material/core";

type TopicCardProps = {
    topic: Topic;
};

const TopicCard = ({ topic }: TopicCardProps) => {
    const { imageUrl, name, description, language } = topic;

    const truncateDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    const truncatedDescription = truncateDescription(description, 200);

    return (
        <View>
            <div className="TopicCard">
                <img className="TopicCardImage" src={imageUrl} alt="Topic" />
                <div className="TopicCardContent">
                    <div className="TopicCardTitle">{name}</div>
                    <div className="TopicCardDescription">
                        <Text>{truncatedDescription}</Text>
                    </div>
                </div>
                <div className="TopicCardFlag">
                    <Chip
                        //FIXME substitute with Icon
                        contentContainerStyle={{backgroundColor: "var(--notification-color)"}}
                        leading={props => <Ionicons
                            name="globe-outline"
                            size={16}
                            color="var(--text-color)"/>}
                        label={topic.language} />
                </div>
            </div>
        </View>
    );
};

export default TopicCard;
