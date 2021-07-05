import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

export function Loading() {

    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator
                size="small"
                color="#F24405"
            />
        </View>
    )
}