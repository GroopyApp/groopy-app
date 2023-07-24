import {DefaultTheme} from "@react-navigation/native";
import {
    setCustomView,
    setCustomText,
    setCustomImage,
    setCustomTouchableOpacity
} from 'react-native-global-props';
import {ViewStyle} from "react-native";

export const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgba(51, 102, 255, 0.5)',
        background: 'rgba(250, 250, 250, 1)',
        card: 'rgba(250, 250, 250, 1)',
        text: 'rgba(51, 51, 51, 1)',
        border: 'var(--border-color)',
        notification: 'rgba(255, 193, 7, 0.5)',
    }
};

export const ExtraThemeColors = {
    danger: 'rgb(222,17,17)'
}

export const DEFAULT_SCREEN_TITLE_STYLE = {
    fontWeight: "var(--important-font-weight)",
    fontSize: "var(--primary-font-size)",
};

export const SCREEN_VIEW_STYLE = {flex: 1, margin: "var(--medium-spacing)"} as ViewStyle;

export const FIXED_TOP_HEADER_STYLE = {zIndex: 100, marginBottom: 'var(--small-spacing)'} as ViewStyle;

export const SCROLLABLE_BODY_STYLE = {zIndex: 1} as ViewStyle;

export const setupFoundation = () => {
    const customViewProps = {
        style: {
            backgroundColor: 'var(--background-color)' // light gray
        }
    };

    const customTextProps = {
        style: {
            fontSize: 16,
            fontFamily: 'var(--primary-font-family)',
            color: 'var(--text-color)'
        }
    };

    const customImageProps = {
        resizeMode: 'cover'
    };

    const customTouchableOpacityProps = {
        hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
    };

    setCustomView(customViewProps);
    // setCustomTextInput(customTextInputProps);
    setCustomText(customTextProps);
    setCustomImage(customImageProps);
    setCustomTouchableOpacity(customTouchableOpacityProps);
}

