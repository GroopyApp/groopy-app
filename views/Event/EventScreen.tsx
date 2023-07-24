import React, {useContext, useEffect, useState} from "react"
import {ScrollView, Text, Image, View, TouchableHighlight, ActivityIndicator} from 'react-native';
import { UserContext } from "../../context/contexts";
import IOIcon from "react-native-vector-icons/Ionicons";
import ReadChip from "../../components/ReadChip/ReadChip";
import { useTheme } from "@react-navigation/native";
import { Event } from "../../types/rest";
import {ExtraThemeColors, SCROLLABLE_BODY_STYLE, Theme} from "../../configs/fundation";
import {EVENT_SCREEN_STYLES} from "./EventScreenStylesheet";
import GatewayService from "../../services/GatewayService";
import UserCard from "../../components/UserCard/UserCard";
import {parseShortDateTime} from "../../utils/DateUtils";


export default function EventScreen({ navigation, route }) {

    const [event, setEvent] = useState<Event>(route.params.event);
    const [subscriptionUpdateInProgress, setSubscriptionUpdateInProgress] = useState(false);

    const userSession = useContext(UserContext);
    const isUserSubscribed = !!event?.participants?.find(user => user.userId === userSession?.username);
    const { colors } = useTheme();

    const updateSubscription = () => {
        setSubscriptionUpdateInProgress(true);
        GatewayService.updateEventSubscription({
            event_id: event.id,
            user_id: userSession!.username},
            userSession!.token)
            .then(response => {
                setSubscriptionUpdateInProgress(false);
                setEvent(response.event);
            })
            .catch(error => {
                console.log("add error alert", error);
            });
    }

    useEffect(() => {}, [event]);

    return (
        <ScrollView style={SCROLLABLE_BODY_STYLE}>
            <View style={EVENT_SCREEN_STYLES.head}>
                <ReadChip
                    style={EVENT_SCREEN_STYLES.headChip}
                    backgroundColor={Theme.colors.notification}
                    textColor={Theme.colors.text}
                    icon={<IOIcon style={{fontSize: 24}} name="people" />}
                    label={event.participants?.length || 0} />
                <Image
                    style={EVENT_SCREEN_STYLES.headImage}
                    source={{
                        uri: event!.imageUrl,
                    }}
                />
            </View>
            <View style={EVENT_SCREEN_STYLES.container}>
                <Text style={EVENT_SCREEN_STYLES.titleText}>{event!.name}</Text>
                <View style={EVENT_SCREEN_STYLES.info}>
                    <IOIcon style={EVENT_SCREEN_STYLES.infoIcon} name="calendar-sharp" />
                    <Text style={EVENT_SCREEN_STYLES.infoText}>{parseShortDateTime(event.startDate)}</Text>
                </View>
                <View style={EVENT_SCREEN_STYLES.info}>
                    <IOIcon style={EVENT_SCREEN_STYLES.infoIcon} name="location-sharp" />
                    <Text style={EVENT_SCREEN_STYLES.infoText}>{event.location.short_address}</Text>
                </View>
                {/* Add location and date here */}
                <View style={EVENT_SCREEN_STYLES.actions}>
                    <TouchableHighlight
                        style={isUserSubscribed ?
                            {...EVENT_SCREEN_STYLES.button, backgroundColor: ExtraThemeColors.danger}
                            : {...EVENT_SCREEN_STYLES.button, width: "90%"}}
                            onPress={updateSubscription} >
                        {subscriptionUpdateInProgress ?
                            <ActivityIndicator />
                            :<View style={EVENT_SCREEN_STYLES.buttonTextContainer}>
                            {isUserSubscribed ? <>
                                    <IOIcon style={EVENT_SCREEN_STYLES.buttonIcon} name="remove-sharp"/>
                                    <Text style={EVENT_SCREEN_STYLES.buttonText}>Unsubscribe</Text>
                                </>
                                : <>
                                    <IOIcon style={EVENT_SCREEN_STYLES.buttonIcon} name="add-sharp"/>
                                    <Text style={EVENT_SCREEN_STYLES.buttonText}>Participate</Text>
                                </>}
                        </View>
                        }
                    </TouchableHighlight>
                    {isUserSubscribed &&
                        <TouchableHighlight
                            style={EVENT_SCREEN_STYLES.button}
                            onPress={() => {}} >
                            <View style={EVENT_SCREEN_STYLES.buttonTextContainer}>
                                <IOIcon style={EVENT_SCREEN_STYLES.buttonIcon} name="chatbubbles-sharp" />
                                <Text style={EVENT_SCREEN_STYLES.buttonText}>Chat</Text>
                            </View>
                        </TouchableHighlight>
                    }
                </View>
                <Text style={EVENT_SCREEN_STYLES.subtitleText}>Description</Text>
                <Text style={EVENT_SCREEN_STYLES.contentText}>{event!.description}</Text>
                <Text style={EVENT_SCREEN_STYLES.subtitleText}>People who will join</Text>
                <View style={EVENT_SCREEN_STYLES.participants}>
                    {event.participants?.map(user =>
                        <UserCard
                            key={user.userId}
                            user={user}
                            onClick={() => {}} />)}
                </View>
            </View>
        </ScrollView>
    );
}