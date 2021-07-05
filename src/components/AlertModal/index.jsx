import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/theme';

export function AlertModal({setModalVisible, modalVisible, message, succeded}) {
    const navigation = useNavigation();

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <TouchableOpacity
                style={styles.container} 
                onPressOut={() => {setModalVisible(false)}}
            >
                <View style={styles.modal}>
                    <View style={styles.content}>
                        {succeded ?
                            <AntDesign
                                name="checkcircleo"
                                color={theme.colors.orange}
                                size={100}
                            />
                        :
                            <AntDesign
                                name="closecircleo"
                                color={theme.colors.orange}
                                size={150}
                            />
                        }
                        <Text style={styles.contentText}>
                            {message}
                        </Text>
                
                        {succeded ?
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.closeButton}
                                onPress={() => {
                                    setModalVisible(false);
                                    navigation.navigate('Home');
                                }}
                            >
                                <Text style={styles.closeButtonText}>
                                    Voltar para página inicial
                                </Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>
                                    Tentar novamente
                                </Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}