import React, { useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Stack, Chip } from "@react-native-material/core";
import './SearchChipsBar.css';
import InputChip from "../InputChip/InputChip";
import { useTheme } from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import IOIcon from 'react-native-vector-icons/Ionicons';
import ReadChip from "../ReadChip/ReadChip";

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

    const placeholder = mode === "TAGS" ? "Add tags" : "Add language";

    return (
        <View style={{rowGap: 8}}>
            <div className="SearchChipsBarContainer">
                <div className="SearchChipsBarChips">
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
                                label={chip}
                                icon={icon}
                                key={index} />
                        )}
                    </Stack>
                </div>
            </div>
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
