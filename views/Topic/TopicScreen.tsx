import React, { useContext } from "react"
import {ScrollView, Text, StyleSheet, Image, View} from 'react-native';
import { UserContext } from "../../context/contexts";
import type { Topic } from "../../types/rest";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import IOIcon from "react-native-vector-icons/Ionicons";
import {Stack} from "@react-native-material/core";
import ReadChip from "../../components/ReadChip/ReadChip";
import { useTheme } from "@react-navigation/native";
import { SCROLLABLE_BODY_STYLE } from "../../configs/fundation";
import {TOPIC_SCREEN_STYLES} from "./TopicScreenStylesheet";
import EventCard from "../../components/EventCard/EventCard";
import eventCard from "../../components/EventCard/EventCard";

type TopicScreenProps = {
    topic: Topic | null;
};
export default function TopicScreen({ navigation, route }) {

    const { topic }: TopicScreenProps = route.params;

    const userSession = useContext(UserContext);
    const { colors } = useTheme();

    return (
        <ScrollView style={SCROLLABLE_BODY_STYLE}>
            <Image
                style={TOPIC_SCREEN_STYLES.image}
                source={{
                    uri: topic!.imageUrl,
                }}
            />
            <View style={TOPIC_SCREEN_STYLES.container}>
                <Text style={TOPIC_SCREEN_STYLES.titleText}>{topic!.name}</Text>
                <View style={TOPIC_SCREEN_STYLES.tagsStack} >
                    <Stack wrap fill
                           spacing={4}
                           style={{
                               rowGap: 4,
                               columnGap: 4}}
                           direction="row">
                        <ReadChip
                            backgroundColor={colors.primary}
                            textColor={colors.text}
                            label={topic!.language}
                            icon={<IOIcon name="language" style={TOPIC_SCREEN_STYLES.leadingIcon} />}
                        />
                        {topic!.categories.map((category, index) =>
                            <ReadChip
                                backgroundColor={colors.notification}
                                textColor={colors.text}
                                label={category}
                                icon={<FAIcon name="hashtag" style={TOPIC_SCREEN_STYLES.leadingIcon} /> }
                                key={index} />
                        )}
                    </Stack>
                </View>
                <Text style={TOPIC_SCREEN_STYLES.subtitleText}>Description</Text>
                <Text style={TOPIC_SCREEN_STYLES.contentText}>{topic!.description}</Text>
                <Text style={TOPIC_SCREEN_STYLES.subtitleText}>Upcoming events</Text>
                <View style={TOPIC_SCREEN_STYLES.events}>
                    {topic!.events?.map(event => <EventCard key={event.id} event={event} onClick={navigation.navigate('Event', {event: event})} />)}
                </View>
            </View>
        </ScrollView>
    );
}