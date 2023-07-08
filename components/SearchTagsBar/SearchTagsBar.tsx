import React, { useState } from 'react';
import {TextInput, View} from "react-native";
import {Stack, Chip } from "@react-native-material/core";
import Ionicons from "react-native-vector-icons/Ionicons";
import './SearchTagsBar.css';

type SearchTagBarProps = {
    onTagsUpdate: (chips: string[]) => void;
};
const SearchTagsBar = ({ onTagsUpdate }: SearchTagBarProps) => {

    const [initialText, setInitialText] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const onInputChange = async (text) => {
        setInitialText(text);
        if (text.endsWith(" ")) {
            setInitialText("");
            let tag = text.trim();
            //TODO add validators
            let newTags = tags.concat(tag);
            onTagsUpdate(newTags);
            setTags(newTags);
        }
    }

    const removeTag = (tagToDelete) => {
        let newTags = tags.filter(tag => tag !== tagToDelete);
        setTags(newTags);
        onTagsUpdate(newTags);
    }

    return (
        <View>
            <div className="SearchTagsBarContainer">
                <div className="SearchTagsBarInputContainer">
                    <div className="SearchTagsBarIcon">
                        <Ionicons
                            name="ios-search"
                            size="var(--normal-spacing)"
                            color="var(--text-color)" />
                    </div>
                    <div className="SearchTagsBarInput">
                        <TextInput
                            style={{ width: '100%' }}
                            placeholder="Add tags"
                            placeholderTextColor="var(--text-color)"
                            value={initialText}
                            onChangeText={onInputChange} />
                    </div>
                </div>
                <div className="SearchTagsBarChips">
                    <Stack wrap fill
                           spacing={4}
                           direction="row">
                        {tags.map((tag, index) => <Chip
                            onPress={() => removeTag(tag)}
                            //FIXME substitute with Icon
                            leading={props => <Ionicons name="ion-pound" {...props} />}
                            label={tag}
                            key={index} />
                        )}
                    </Stack>
                </div>
            </div>
        </View>
    );
};

export default SearchTagsBar;
