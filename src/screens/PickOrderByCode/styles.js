import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
    inner: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        height: 180,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 160,
    },
    pickOrderTitle: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.white,
    },
    pickOrderInput: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 16,
    },
    modalTextBold: {
        fontFamily: theme.fonts.title700,
        fontSize: 24
    }
})