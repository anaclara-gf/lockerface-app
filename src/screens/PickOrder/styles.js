import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    pickOrderButtonWrap: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalTextBold: {
        fontFamily: theme.fonts.title700,
        fontSize: 24
    }
})