import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/theme';
import LogoName from '../../assets/avanade-logo-name.png';

export function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <BorderlessButton 
                onPress={() => navigation.goBack()}
            >
                <Entypo
                    name={'chevron-left'}
                    color={theme.colors.orange}
                    size={40}
                />
            </BorderlessButton>

            <BorderlessButton 
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    style={styles.logo}
                    source={LogoName}
                />
            </BorderlessButton>

            
        </View>
    );
}