import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 0.55,
        resizeMode: 'cover',
    },
    main: {
        flex: 1,
        padding: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: 24,
        fontFamily: theme.fonts.title700,
        color: theme.colors.white,
        marginTop: 15,
    },
    buttonsWrap: {
        height: 170,
        justifyContent: 'space-between',
    },
    registerUser: {
        flexDirection: 'row',
    },
    registerUserText: {
        fontSize: 16,
        color: theme.colors.white,
        fontFamily: theme.fonts.text400,
    },
})