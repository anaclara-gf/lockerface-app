import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';

import { styles } from './styles';

export function Footer() {
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
      }, []);
    
      const [keyboardStatus, setKeyboardStatus] = useState("Keyboard Hidden");
      const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
      const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

    return (
        <>
        {keyboardStatus === "Keyboard Hidden" &&
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Aplicativo desenvolvido para o Talent Fest da Laboratoria 2021
                </Text>
            </View>
        }
        </>
    );
}