import React, { useState } from 'react';

import {
    View,
    TextInput
} from 'react-native';
import {TOPIC_SCREEN_STYLES} from "./InputChipStylesheet";

export interface InputChipProps {
    onChipInserted: (chipText: string) => void;
    placeholder?: string;
    leadingIcon: React.ReactNode;
    customContainerStyle?: any;
    customInputStyle?: any;
}

const InputChip: React.FC<InputChipProps> = ({ onChipInserted, placeholder, leadingIcon, customContainerStyle, customInputStyle }) => {

    const [input, setInput] = useState<string>('');

    const handleInputSubmit = (text: string) => {
        setInput(text);
        if (text.trim() !== '') {
            if (text.endsWith(" ")) {
                setInput('');
                onChipInserted(text.trim());
            }
        }
    };

    const containerStyle = {
        ...TOPIC_SCREEN_STYLES.container,
        ...customContainerStyle
    }

    const inputStyle = {
        ...TOPIC_SCREEN_STYLES.input,
        ...customInputStyle
    }

    return (
        <View style={containerStyle}>
            { leadingIcon }
            <TextInput
                style={inputStyle}
                value={input}
                placeholder={placeholder}
                onChangeText={handleInputSubmit}
                onSubmitEditing={(event) => handleInputSubmit(event.nativeEvent.text)}/>
        </View>
    );
};

export default InputChip;
