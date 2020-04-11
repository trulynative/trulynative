import { StyleSheet } from 'react-native';

const styles = (theme, appearance) => {
    return new StyleSheet.create({
        tnToastContainer: {
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 150,
            height: 60,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.67)',
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 15,
            paddingRight: 15
        },
        tnToastImage: {
        },
        tnToastContent: {
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.9)'
        },
        tnToastPrimaryAction: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.8)'
        },
        tnToastSecondaryAction: {
        },
        tnToastShadow: {
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
