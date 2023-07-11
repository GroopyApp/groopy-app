import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        ...styles.container,
        ...customContainerStyle
    }

    const inputStyle = {
        ...styles.input,
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        marginRight: 8,
        paddingHorizontal: 12,
        height: 32,
        borderWidth: 1,
        width: 'var(--gorgeous-spacing)',
    },
    input: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        width: '100%'
    },
});

export default InputChip;
