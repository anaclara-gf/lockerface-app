import React from 'react';
import { View, Text, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/theme';

export function ConfirmModal({setModalVisible, modalVisible, message, actionOnConfirm, loading}) {
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
                        <AntDesign
                            name="questioncircleo"
                            color={theme.colors.orange}
                            size={100}
                        />
                        <Text style={styles.contentText}>
                            {message}
                        </Text>
                
                        <View style={styles.buttons}>
                            <RectButton
                                style={styles.editButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.editButtonText}>
                                    Editar
                                </Text>
                            </RectButton>
                            {loading ? 
                                <View style={styles.loadingContainer}>
                                    <ActivityIndicator
                                        size="small"
                                        color="#F24405"
                                    />
                                </View>
                            :
                                <TouchableOpacity
                                    style={styles.confirmButton}
                                    onPress={() => actionOnConfirm()}
                                >
                                    <Text style={styles.confirmButtonText}>
                                        Confirmar
                                    </Text>
                                </TouchableOpacity>
                            }
                        </View>
                        
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}