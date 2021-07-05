import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    registerFormWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerForm: {
        height: 180,
        justifyContent: 'space-between',
        marginVertical: 20
    },
    registerInput: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 16,
    },
    pickOrder: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 35,
        marginTop: 30,
    },
    pickOrderText: {
        fontSize: 16,
        color: theme.colors.white,
        fontFamily: theme.fonts.text400,
    },
})