import React from 'react';
import { Text, Image, TouchableHighlight, View } from 'react-native';
import { useTrulyNative } from '../../theming';
import dynamicStyles from './styles';

const TNCard = ({
    containerStyle,
    radius,
    onPress,
    styles,
    theme,
    appearance,
    children
}) => {
    const containerStyles = [
        styles.tnCardContainer,
        radius && {borderRadius: radius},
        styles.tnCardShadow,
        containerStyle
    ];

    return (
        <TouchableHighlight style={containerStyles} onPress={onPress}>
            <View>
                {children}
            </View>
        </TouchableHighlight>
    );
};

export default useTrulyNative(TNCard, dynamicStyles);
