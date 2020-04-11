import { StyleSheet } from 'react-native';

const styles = (theme, appearance) => {
    return new StyleSheet.create({
        tnButtonContainer: {
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors[appearance].primaryForeground,
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20
        },
        tnButtonText: {
            color: theme.colors[appearance].foregroundContrast,
            fontSize: 16
        },
        tnButtonShadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }
    });
};

export default styles;
