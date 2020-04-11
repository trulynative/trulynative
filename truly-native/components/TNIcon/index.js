import React from 'react';
import { Platform } from 'react-native';
import { useTrulyNative } from '../../theming';
import { createIconSet } from '@expo/vector-icons';
import iOSGlyphMap from '../../assets/icons-fonts/sf-symbols/SFSymbols.json';
import androidGlyphMap from '../../assets/icons-fonts/material/MaterialIcons.json';

// To add new icons, for iOS you can find the codes in https://github.com/virskor/flutter_sfsymbols/blob/master/lib/src/sfsymbols.dart

const iOSExpoAssetId = require("../../assets/icons-fonts/sf-symbols/SFSymbols.ttf");
const androidExpoAssetId = require("../../assets/icons-fonts/material/MaterialIcons.ttf");

const CustomIconiOS = createIconSet(iOSGlyphMap, 'FontName', iOSExpoAssetId);
const CustomIconAndroid = createIconSet(androidGlyphMap, 'FontName', androidExpoAssetId);

const TNIcon = ({
    name,
    size
}) => {
    if (Platform.OS === 'ios') {
        return (
            <CustomIconiOS name={name} size={size || 32} color="red" />
        );
    }

    return (
        <CustomIconAndroid name={name} size={size || 32} color="red" />
    );
};

export default useTrulyNative(TNIcon);
