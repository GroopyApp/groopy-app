import React, {useContext, useEffect, useState} from "react"
import {ScrollView, Text, Image, View, TouchableHighlight, ActivityIndicator} from 'react-native';
import { UserContext } from "../../context/contexts";
import type { Topic } from "../../types/rest";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import IOIcon from "react-native-vector-icons/Ionicons";
import {Stack} from "@react-native-material/core";
import ReadChip from "../../components/ReadChip/ReadChip";
import { useTheme } from "@react-navigation/native";
import {ExtraThemeColors, SCROLLABLE_BODY_STYLE, Theme} from "../../configs/fundation";
import {TOPIC_SCREEN_STYLES} from "./TopicScreenStylesheet";
import EventCard from "../../components/EventCard/EventCard";
import GatewayService from "../../services/GatewayService";

export default function TopicScreen({ navigation, route }) {

    const [topic, setTopic] = useState<Topic>(route.params.topic);
    const [subscriptionUpdateInProgress, setSubscriptionUpdateInProgress] = useState(false);

    const userSession = useContext(UserContext);
    const isUserSubscribed = !!topic?.subscribers?.find(user => user.userId === userSession?.username);
    const { colors } = useTheme();

    const updateSubscription = () => {
        setSubscriptionUpdateInProgress(true);
        GatewayService.updateTopicSubscription({
            topic_id: topic.id,
            user_id: userSession!.username},
            userSession!.token)
            .then(response => {
                setSubscriptionUpdateInProgress(false);
                setTopic(response.topic);
            })
            .catch(error => {
                console.log("add error alert", error);
            });
    }

    useEffect(() => {}, [topic]);

    return (
        <ScrollView style={SCROLLABLE_BODY_STYLE}>
            <View style={TOPIC_SCREEN_STYLES.head}>
                <ReadChip
                    style={TOPIC_SCREEN_STYLES.headChip}
                    backgroundColor={Theme.colors.notification}
                    textColor={Theme.colors.text}
                    icon={<IOIcon style={{fontSize: 24}} name="people" />}
                    label={topic.subscribers?.length || 0} />
                <Image
                    style={TOPIC_SCREEN_STYLES.headImage}
                    source={{
                        uri: topic!.imageUrl,
                    }}
                />
            </View>
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
                <View style={TOPIC_SCREEN_STYLES.actions}>
                    <TouchableHighlight
                        style={isUserSubscribed ?
                            {...TOPIC_SCREEN_STYLES.button, backgroundColor: ExtraThemeColors.danger}
                            : {...TOPIC_SCREEN_STYLES.button, width: "90%"}}
                            onPress={updateSubscription} >
                        {subscriptionUpdateInProgress ?
                            <ActivityIndicator />
                            :<View style={TOPIC_SCREEN_STYLES.buttonTextContainer}>
                            {isUserSubscribed ? <>
                                    <IOIcon style={TOPIC_SCREEN_STYLES.buttonIcon} name="remove-sharp"/>
                                    <Text style={TOPIC_SCREEN_STYLES.buttonText}>Unsubscribe</Text>
                                </>
                                : <>
                                    <IOIcon style={TOPIC_SCREEN_STYLES.buttonIcon} name="add-sharp"/>
                                    <Text style={TOPIC_SCREEN_STYLES.buttonText}>Join</Text>
                                </>}
                        </View>
                        }
                    </TouchableHighlight>
                    {isUserSubscribed &&
                        <TouchableHighlight
                            style={TOPIC_SCREEN_STYLES.button}
                            onPress={() => {}} >
                            <View style={TOPIC_SCREEN_STYLES.buttonTextContainer}>
                                <IOIcon style={TOPIC_SCREEN_STYLES.buttonIcon} name="chatbubbles-sharp" />
                                <Text style={TOPIC_SCREEN_STYLES.buttonText}>Chat</Text>
                            </View>
                        </TouchableHighlight>
                    }
                </View>
                <Text style={TOPIC_SCREEN_STYLES.subtitleText}>Description</Text>
                <Text style={TOPIC_SCREEN_STYLES.contentText}>{topic!.description}</Text>
                <Text style={TOPIC_SCREEN_STYLES.subtitleText}>Upcoming events</Text>
                <View style={TOPIC_SCREEN_STYLES.events}>
                    {topic!.events?.map(event =>
                        <EventCard key={event.id} event={event} onClick={() => navigation.navigate('Event', {event: event})} />)}
                </View>
            </View>
        </ScrollView>
    );
}