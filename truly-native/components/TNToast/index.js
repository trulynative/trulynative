import React from 'react';

import { Text, Image, TouchableHighlight, View } from 'react-native';
import { useTrulyNative } from '../../theming';
import dynamicStyles from './styles';

const TNToast = ({
    containerStyle,
    textStyle,
    actionStyle,
    text,
    action,
    onAction,
    sticky,
    radius,
    onPress,
    styles,
    theme,
    appearance
}) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const containerStyles = [
        styles.tnToastContainer,
        radius && {borderRadius: radius},
        styles.tnToastShadow,
        containerStyle
    ];

    const textStyles = [
        styles.tnToastContent,
        textStyle
    ];

    const actionStyles = [
        styles.tnToastPrimaryAction,
        actionStyle
    ];
    if (!isVisible && !sticky) {
        return null;
    }

    if (!sticky) {
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    }

    return (
        <TouchableHighlight style={containerStyles} onPress={onPress}>
            <View>
                <Text style={textStyles}>{text}</Text>
                <Text style={actionStyles} onPress={onAction}>{action}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default useTrulyNative(TNToast, dynamicStyles);
