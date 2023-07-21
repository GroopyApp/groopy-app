import React, { useContext } from "react"
import {ScrollView, Text, StyleSheet} from 'react-native';
import { UserContext } from "../../context/contexts";
import type { Topic } from "../../types/rest";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import IOIcon from "react-native-vector-icons/Ionicons";
import {SCROLLABLE_BODY_STYLES, SUBTITLE_TEXT_STYLES, TITLE_TEXT_STYLES} from "../../configs/constants";
import {Stack} from "@react-native-material/core";
import ReadChip from "../../components/ReadChip/ReadChip";
import { useTheme } from "@react-navigation/native";


type TopicScreenProps = {
    topic: Topic | null;
};
export default function TopicScreen({ navigation, route }) {

    const { topic } = route.params;

    const userSession = useContext(UserContext);
    const { colors } = useTheme();

    return (
        <ScrollView style={SCROLLABLE_BODY_STYLES}>
            <div className="TopicDetailsContainer">
                <img className="TopicDetailsImage" src={topic!.imageUrl} alt="Topic" />
                <Text style={TITLE_TEXT_STYLES}>{topic!.name}</Text>
                <div className="TopicDetailsInfo">
                    <Stack wrap fill
                           spacing={4}
                           style={{rowGap: 8}}
                           direction="row">
                        <ReadChip
                            backgroundColor={colors.primary}
                            textColor={colors.text}
                            label={topic!.language}
                            icon={<IOIcon name="language" style={styles.leadingIcon} />}
                        />
                        {topic!.categories.map((category, index) =>
                            <ReadChip
                                backgroundColor={colors.notification}
                                textColor={colors.text}
                                label={category}
                                icon={<FAIcon name="hashtag" style={styles.leadingIcon} /> }
                                key={index} />
                        )}
                    </Stack>

                </div>
                <Text>{topic!.description}</Text>
                <Text style={SUBTITLE_TEXT_STYLES}>Upcoming events</Text>
            </div>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    leadingIcon: {
        marginRight: 8,
        fontSize: 24,
    }
});