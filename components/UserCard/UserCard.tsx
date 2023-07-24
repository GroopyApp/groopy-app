import React from 'react';
import type { User } from '../../types/rest';
import {Image, Text, View} from "react-native";
import {USER_CARD_STYLES} from "./UserCardStylesheet";

type UserCardProps = {
    user: User;
    onClick: () => void;
};

const UserCard = ({ user, onClick }: UserCardProps) => {

    const { name, surname, userId, photoUrl } = user;

    return (
        <View onTouchEnd={onClick} style={USER_CARD_STYLES.container}>
            <Image style={USER_CARD_STYLES.image} source={{uri: photoUrl}} />
            <View style={USER_CARD_STYLES.content}>
                <Text style={USER_CARD_STYLES.name}>{name} {surname}</Text>
                <Text style={USER_CARD_STYLES.username}>{userId}</Text>
            </View>
        </View>
    );
};

export default UserCard;
