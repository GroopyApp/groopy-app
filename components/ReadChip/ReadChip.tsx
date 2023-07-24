import {Chip, Color} from "@react-native-material/core";
import React from "react";
import {ImageStyle, ViewStyle} from "react-native";

type ReadChipProps = {
    backgroundColor: Color,
    textColor: Color,
    label: string | number,
    icon?: JSX.Element,
    onClick?: () => void,
    style?: ViewStyle
}
const ReadChip = ({backgroundColor, textColor, label, icon, onClick, style}: ReadChipProps) => {
    return (
        <Chip
            style={style}
            contentContainerStyle={{backgroundColor: backgroundColor}}
            labelStyle={{color: textColor}}
            //FIXME substitute with Icon
            leading={props => icon}
            onPress={onClick}
            label={label} />
    )
}

export default ReadChip;