import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        flex: 1
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    registerForm: {
        height: 450,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 80
    },
    registerTitle: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.white,
    },
    registerInput: {
        height: 40,
        width: 250,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 16,
    },
    package: {
        justifyContent: 'space-between'
    },
    packageTitle: {
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.white,
        textAlign: 'center',
    },
    packageList: {
        width: 250,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    packageButton: {
        width: 115,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        shadowColor: theme.colors.black,
    },
    packageButtonTextTitle: {
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
    },
    packageButtonTextSize: {
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
    },
    modalTextBold: {
        fontFamily: theme.fonts.title700,
        fontSize: 24
    }
})