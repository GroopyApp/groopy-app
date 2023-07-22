import React, {useEffect, useState, useContext } from "react"
import {ScrollView, ActivityIndicator, Animated, View} from 'react-native';
import type { Topic } from "../../types/rest";
import { UserContext } from "../../context/contexts";
import TopicCard from "../../components/TopicCard/TopicCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import GeoService from "../../services/GeoService";
import GatewayService from "../../services/GatewayService";
import { SCREEN_VIEW_STYLE, FIXED_TOP_HEADER_STYLE, SCROLLABLE_BODY_STYLE } from "../../configs/fundation";

export default function HomeScreen({navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);

    const userSession = useContext(UserContext);

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
                        location_id: GeoService.getCurrentLocation()
                    },
                    userId: userSession!.username
                }
            }, userSession!.token).then((response) => {
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
        <View style={SCREEN_VIEW_STYLE}>
            <View style={FIXED_TOP_HEADER_STYLE}>
                <SearchBar onInputChange={onTextSearch} />
            </View>
            <ScrollView style={SCROLLABLE_BODY_STYLE}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (<Animated.FlatList
                        data={filteredTopics}
                        keyExtractor={({id}) => id}
                        renderItem={({item}) => (
                            <TopicCard
                                key={item.id}
                                topic={item}
                                onClick={() => navigation.navigate('Topic', {topic: item})}
                            />
                        )}
                    />
                )}
            </ScrollView>
        </View>
    );
}