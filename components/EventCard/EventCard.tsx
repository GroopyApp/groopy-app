import React from 'react';
import type { Event } from '../../types/rest';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, Text, View} from "react-native";
import ReadChip from "../ReadChip/ReadChip";
import {useTheme} from "@react-navigation/native";
import {EVENT_CARD_STYLES} from "./EventCardStylesheet";
import {parseShortDateTime} from "../../utils/DateUtils";

type EventCardProps = {
    event: Event;
    onClick: () => void;
};

const EventCard = ({ event, onClick }: EventCardProps) => {

    const { name, location, imageUrl, startDate, participants } = event;

    const { colors } = useTheme();

    return (
        <View onTouchEnd={onClick} style={EVENT_CARD_STYLES.container}>
            <Image style={EVENT_CARD_STYLES.image} source={{uri: imageUrl}} />
            <View style={EVENT_CARD_STYLES.content}>
                <Text style={EVENT_CARD_STYLES.title}>{name}</Text>
                <View style={EVENT_CARD_STYLES.date}>
                    <Icon name="calendar-sharp" style={EVENT_CARD_STYLES.dateIcon}/>
                    <Text style={EVENT_CARD_STYLES.dateText}>{parseShortDateTime(startDate)}</Text>
                </View>
                <View style={EVENT_CARD_STYLES.location}>
                    <Icon name="location-sharp" style={EVENT_CARD_STYLES.locationIcon}/>
                    <Text style={EVENT_CARD_STYLES.locationAddress}>{location?.short_address || "Palau Sant Jordi, 08026, Barcelona"}</Text>
                </View>
            </View>
            <View style={EVENT_CARD_STYLES.participants}>
                <ReadChip
                    backgroundColor={colors.notification}
                    textColor={colors.text}
                    label={participants?.length.toString() || '0'}
                    icon={<Icon name="people" style={EVENT_CARD_STYLES.participantsIcon}/>}
                />
            </View>
        </View>
    );
};

export default EventCard;
