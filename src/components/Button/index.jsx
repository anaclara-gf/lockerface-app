import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

export function Button({ actionOnPress, text, type }) {

    function handleButtonType(buttonType) {
        if(buttonType === "mainButton") {
            return {
                "wrap": styles.mainButton,
                "text": styles.mainButtonText
            }
        }
        if(buttonType === "secondaryButton") {
            return {
                "wrap": styles.secondaryButton,
                "text": styles.secondaryButtonText
            }
        }
        if(buttonType === "textButton") {
            return {
                "wrap": styles.textButton,
                "text": styles.textButtonText
            }
        }
    }
    
    return (
        <RectButton
            onPress={ actionOnPress }
            style={ handleButtonType(type).wrap }
        >
            <Text style={ handleButtonType(type).text }>
                {text}
            </Text>
        </RectButton>
    )
}