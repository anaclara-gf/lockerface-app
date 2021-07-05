import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 90,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 10,
        backgroundColor: theme.colors.white,
    },
    logo: {
        width: 170,
        resizeMode: 'contain',
    }
})