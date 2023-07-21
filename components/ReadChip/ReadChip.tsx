import {Chip, Color} from "@react-native-material/core";
import React from "react";

type ReadChipProps = {
    backgroundColor: Color,
    textColor: Color,
    label: string,
    icon?: JSX.Element,
}
const ReadChip = ({backgroundColor, textColor, label, icon}: ReadChipProps) => {
    return (
        <Chip
            contentContainerStyle={{backgroundColor: backgroundColor}}
            labelStyle={{color: textColor}}
            //FIXME substitute with Icon
            leading={props => icon}
            label={label} />
    )
}

export default ReadChip;