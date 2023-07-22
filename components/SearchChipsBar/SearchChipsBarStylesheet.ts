import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {Theme} from "../../configs/fundation";

export const SEARCH_CHIPS_BAR_STYLES = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        marginTop: 'var(--medium-spacing)',
        rowGap: 8,
    } as ViewStyle,
    chips: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        flexWrap: "wrap",
        marginLeft: "var(--small-spacing)"
    } as ViewStyle
});

//
// .SearchChipsBarInputContainer {
//     margin-top: var(--medium-spacing);
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     height: var(--normal-spacing);
//     background-color: var(--input-color);
//     border-radius: var(--small-spacing);
//     padding: var(--medium-spacing) var(--small-spacing);
// }
//
// .SearchChipsBarIcon {
//     margin-right: var(--small-spacing);
// }
//
// .SearchChipsBarInput {
//     width: 100%;
//     padding-bottom: var(--tiny-spacing);
//     font-size: var(--average-spacing);
//     color: var(--input-color);
// }
