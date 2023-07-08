import React, {useEffect, useState} from "react"
import {ScrollView, ActivityIndicator, Animated, View} from 'react-native';
import FlatList = Animated.FlatList;
import GatewayService from "../../services/GatewayService";
import type { Topic } from "../../types/rest";
import TopicCard from "../../components/TopicCard/TopicCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import {SCREEN_VIEW_STYLES} from "../../configs/constants";

export default function HomeScreen() {

    const [isLoading, setLoading] = useState(true);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);

    const onTextSearch = (text) => {
        if (text === "") {
            setFilteredTopics(topics);
            return;
        }
        const filteredTopics = topics.filter(topic => topic.name.toLowerCase().includes(text.toLowerCase())
            || topic.description.toLowerCase().includes(text.toLowerCase()));
        setFilteredTopics(filteredTopics);
    }

    const getTopics = () => {
        try {
            GatewayService.getWall({
                criteria: {
                    location: {
                        location_id: "1"
                    },
                    userId: "test8"
                }
            }).then((response) => {
                setTopics(response.topics);
                setFilteredTopics(response.topics);
                setLoading(false);
            });
        } catch (error) {
            //TODO add error view
            console.error(error);
        }
    }

    useEffect(() => {
        getTopics();
        if (topics.length === 0) {
            //TODO add empty view
            console.log("No topics found");
        }
    }, []);

    return (
        <View style={SCREEN_VIEW_STYLES}>
            <SearchBar onInputChange={onTextSearch} />
            <ScrollView>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (<FlatList
                        data={filteredTopics}
                        keyExtractor={({id}) => id}
                        renderItem={({item}) => (
                            <TopicCard
                                key={item.id} topic={item} />
                        )}
                    />
                )}
            </ScrollView>
        </View>
    );
}