import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    loadingContainer: {
        width: 300,
        height: 60,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        elevation: 10, 
        shadowColor: theme.colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
})