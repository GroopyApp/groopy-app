import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput, View } from "react-native";
import { SEARCH_BAR_STYLES } from "./SearchBarStylesheet";

type SearchBarProps = {
    onInputChange: (text: string) => void;
};
const SearchBar = ({ onInputChange }: SearchBarProps) => {
    return (
        <View style={SEARCH_BAR_STYLES.container}>
            <Icon
                style={SEARCH_BAR_STYLES.icon}
                name="ios-search"
                size="var(--normal-spacing)"
                color="var(--text-color)" />
                    <TextInput
                        style={SEARCH_BAR_STYLES.input}
                        placeholder="Search"
                        placeholderTextColor="var(--text-color)"
                        defaultValue={""}
                        onChangeText={onInputChange}
                    />
        </View>
    );
};

export default SearchBar;
