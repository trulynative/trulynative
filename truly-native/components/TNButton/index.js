import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useTrulyNative } from '../../theming';
import dynamicStyles from './styles';

const TNButton = ({
    containerStyle,
    textStyle,
    radius,
    text,
    onPress,
    styles,
    secondary,
    shadow,
    theme,
    appearance
}) => {
    const containerStyles = [
        styles.tnButtonContainer,
        radius && {borderRadius: radius},
        secondary && {
            backgroundColor: theme.colors[appearance].primaryBackground,
            borderColor: theme.colors[appearance].primaryForeground,
            borderWidth: 1
        },
        shadow && styles.tnButtonShadow,
        containerStyle
    ];

    const textStyles = [
        styles.tnButtonText,
        secondary && {color: theme.colors[appearance].primaryForeground},
        textStyle
    ]

    return (
        <TouchableOpacity style={containerStyles} onPress={onPress}>
            {text && (
                <Text style={textStyles}>{text}</Text>
            )}
        </TouchableOpacity>
    );
};

TNButton.defaultProps = {
    radius: 0
}

export default useTrulyNative(TNButton, dynamicStyles);
