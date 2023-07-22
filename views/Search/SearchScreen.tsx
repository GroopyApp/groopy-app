import React, {useContext, useEffect, useState} from "react"
import {ScrollView, ActivityIndicator, Animated, View} from 'react-native';
import FlatList = Animated.FlatList;
import { UserContext } from "../../context/contexts";
import GatewayService from "../../services/GatewayService";
import type { Topic } from "../../types/rest";
import TopicCard from "../../components/TopicCard/TopicCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchChipBar from "../../components/SearchChipsBar/SearchChipsBar";
import { SCREEN_VIEW_STYLE, FIXED_TOP_HEADER_STYLE, SCROLLABLE_BODY_STYLE } from "../../configs/fundation";

export default function SearchScreen({navigation}) {

    const userSession = useContext(UserContext);

    const [searchTags, setSearchTags] = useState<string[]>([]);
    //TODO add this control
    const [searchLanguages, setSearchLanguages] = useState<string[]>(["IT", "ES", "EN"]);

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
        setLoading(true);
        GatewayService.getWall({
            criteria: {
                location: {
                    location_id: "1"
                },
                hashtags: searchTags,
                languages: searchLanguages
            }
        }, userSession!.token).then((response) => {
            if (!response || !response.topics) {
                console.log("No topics found");
                setTopics([]);
                setFilteredTopics([]);
                setLoading(false);
            }
            setTopics(response.topics);
            setFilteredTopics(response.topics);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setTopics([]);
            setFilteredTopics([]);
            setLoading(false);
        });
    }

    const formatTags = (tags: string[]) => {
        setSearchTags(tags.map((tag) => tag.startsWith("#") ? tag : "#" + tag));
    }

    useEffect(() => {
        getTopics();
    }, [searchTags]);

    return (
        <View style={SCREEN_VIEW_STYLE}>
            <View style={FIXED_TOP_HEADER_STYLE}>
                <SearchBar onInputChange={onTextSearch} />
                <SearchChipBar onChipsUpdate={formatTags} mode="TAGS" />
                {/*<SearchChipBar onChipsUpdate={formatTags} mode="LANG" />*/}
                {/* Introduce languages filter */}
            </View>
            <ScrollView style={SCROLLABLE_BODY_STYLE}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (<FlatList
                        data={filteredTopics}
                        keyExtractor={({id}) => id}
                        renderItem={({item}) => (
                            <TopicCard
                                key={item.id}
                                topic={item}
                                onClick={() => navigation.navigate('Topic', {topic: item})}/>
                        )}
                    />
                )}
            </ScrollView>
        </View>
    );
}