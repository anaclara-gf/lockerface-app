import React, { useState, useEffect, useRef } from 'react';
import {
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    TouchableWithoutFeedback, 
    Keyboard,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { AlertModal } from '../../components/AlertModal';

import { styles } from './styles';
import BackgroundImage from '../../assets/background-orange-waves.jpg';

export function RegisterUser() {
    const navigation = useNavigation();

    const [fullName, setFullName] = useState();
    const [role, setRole] = useState(); 

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [succeded, setSucceded] = useState();

    function registerUserFace() {
        if(!role || !fullName) {
            setModalVisible(true),
            setSucceded(false),
            setModalMessage("Os campos 'Nome Completo' e 'Função' são obrigatórios")
        } else {
            navigation.navigate('RegisterUserFace', {
                name: fullName,
                role: role
            });
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ImageBackground
                    source={BackgroundImage}
                    style={styles.background}
                >
                    <AlertModal
                        setModalVisible={setModalVisible}
                        modalVisible={modalVisible}
                        message={modalMessage}
                        succeded={succeded}
                    />
                    <Header />
                    <View style={styles.registerFormWrap}>
                        <View style={styles.registerForm}>
                            <TextInput
                                style={styles.registerInput}
                                value={fullName}
                                onChangeText={(text) => setFullName(text)}
                                placeholder='Nome completo'
                            />
                            <TextInput
                                style={styles.registerInput}
                                value={role}
                                onChangeText={(text) => setRole(text)}
                                placeholder='Função'
                            />
                            
                            <Button 
                                actionOnPress={ registerUserFace }
                                text={"Próximo"}
                                type={"mainButton"}
                            />
                        </View>
                    </View>
             
                    <View style={styles.pickOrder}>
                        <Text style={styles.pickOrderText}>
                            Já tem cadastro?
                        </Text>
                        <Button 
                            actionOnPress={ () => navigation.navigate('PickOrder') }
                            text={"Pegar encomenda"}
                            type={"textButton"}
                        />
                    </View>
                    
                    
                    <Footer />
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}