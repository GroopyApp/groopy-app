import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import './SearchBar.css';
import {TextInput, View } from "react-native";

type SearchBarProps = {
    onInputChange: (text: string) => void;
};
const SearchBar = ({ onInputChange }: SearchBarProps) => {
    return (
        <View>
            <div className="SearchBarContainer">
                <span className="SearchBarIcon">
                    <Ionicons
                        name="ios-search"
                        size="var(--normal-spacing)"
                        color="var(--text-color)" />
                </span>
                <span className="SearchBarInput">
                    <TextInput
                        style={{ width: '100%' }}
                        placeholder="Search"
                        placeholderTextColor="var(--text-color)"
                        defaultValue={""}
                        onChangeText={onInputChange}
                    />
                </span>
            </div>
        </View>
    );
};

export default SearchBar;
