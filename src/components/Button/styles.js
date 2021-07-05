import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    mainButton: {
        width: 300,
        height: 60,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainButtonText: {
        fontFamily: theme.fonts.title900,
        color: theme.colors.orange,
        fontSize: 18,
    },
    secondaryButton: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 55,
        marginTop: 40,
    },
    secondaryButtonText: {
        fontSize: 16,
        color: theme.colors.orange,
        fontFamily: theme.fonts.text400,
    },
    textButton: {
        marginLeft: 5,
    },
    textButtonText: {
        fontSize: 16,
        color: theme.colors.white,
        textDecorationLine: 'underline',
        fontFamily: theme.fonts.title700,
    },
})