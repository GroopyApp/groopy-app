import React, { useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Stack } from "@react-native-material/core";
import InputChip from "../InputChip/InputChip";
import { useTheme } from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import IOIcon from 'react-native-vector-icons/Ionicons';
import ReadChip from "../ReadChip/ReadChip";
import {SEARCH_CHIPS_BAR_STYLES} from "./SearchChipsBarStylesheet";

type SearchChipsBarProps = {
    onChipsUpdate: (chips: string[]) => void;
    mode: "TAGS" | "LANG";
};
const SearchChipsBar = ({ onChipsUpdate, mode }: SearchChipsBarProps) => {

    const { colors } = useTheme();

    const [chips, setChips] = useState<string[]>([]);

    const onChipAdded = async (chip) => {
        let newChips = chips.concat(chip);
        onChipsUpdate(newChips);
        setChips(newChips);
    }

    const removeChip = (chipToDelete) => {
        let newChips = chips.filter(tag => tag !== chipToDelete);
        setChips(newChips);
        onChipsUpdate(newChips);
    }


    const customContainerStyle = mode === "LANG" ? {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        marginRight: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
    } : null;

    const icon = mode === "TAGS" ?
        <FAIcon name="hashtag" style={styles.leadingIcon} /> :
        <IOIcon name="language" style={styles.leadingIcon} />;

    const placeholder = mode === "TAGS" ? "Type a tag" : "Type a language";

    return (
        <View style={SEARCH_CHIPS_BAR_STYLES.container}>
            <View style={SEARCH_CHIPS_BAR_STYLES.chips}>
                    <Stack wrap fill
                           spacing={4}
                           style={{rowGap: 8}}
                           direction="row">
                        <InputChip
                            onChipInserted={onChipAdded}
                            leadingIcon={icon}
                            placeholder={placeholder}
                            customContainerStyle={customContainerStyle}
                            customInputStyle={{color: colors.text}} />
                        {chips.map((chip, index) =>
                            <ReadChip
                                backgroundColor={colors.notification}
                                textColor={colors.text}
                                onClick={() => removeChip(chip)}
                                label={chip}
                                icon={icon}
                                key={index} />
                        )}
                    </Stack>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    leadingIcon: {
        marginRight: 8,
        fontSize: 24,
    }
});

export default SearchChipsBar;
