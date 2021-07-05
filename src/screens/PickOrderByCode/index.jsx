import React, { useState, useEffect, useRef } from 'react';
import { 
    View, 
    Text, 
    ImageBackground, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    TextInput,
    Keyboard
} from 'react-native';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { AlertModal } from '../../components/AlertModal';

import { styles } from './styles';
import BackgroundImage from '../../assets/background-orange-waves.jpg';

export function PickOrderByCode() {
    const [codeNumber, setCodeNumber] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [succeded, setSucceded] = useState();
    const [loading, setLoading] = useState(false);

    function handleModal(succeded, message) {
        setModalVisible(true);
        setSucceded(succeded);
        setModalMessage(message);
        setLoading(false);
    }

    async function pickOrder() {
        setLoading(true);

        if(codeNumber){
            const lockerFaceAPIUrl = 'https://lockerface-api.herokuapp.com';
            
            try {
                const packageData = await fetch(`${lockerFaceAPIUrl}/packages/code/${codeNumber}`);
                const result = await packageData.json();
                const response = 
                result.packageCode ?
                    {
                            "succeded": true,
                            "message":
                            <>
                                <Text style={styles.modalTextBold}> Olá, {result.userName} {`\n`}</Text>
                                <Text> Sua encomenda está localizada no {`\n`}</Text>
                                <Text style={styles.modalTextBold}> ARMÁRIO {result.lockerNumber} {`\n`}</Text>
                                <Text> O armário já está desbloqueado! {`\n`}</Text>
                            </>
                    }
                :
                    {
                        "succeded": false,
                        "message": "Não há encomendas com esse código!"
                    }

                handleModal(response.succeded, response.message);
            } catch (err) {
                handleModal(false, 'Internal Error');
            }
        } else {
            handleModal(false, 'O código de entrega é obrigatório');
        }
    }

    return (
        <ImageBackground 
            source={BackgroundImage}
            style={styles.background}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <AlertModal
                            setModalVisible={setModalVisible}
                            modalVisible={modalVisible}
                            message={modalMessage}
                            succeded={succeded}
                        />
                        <Header />

                        <View style={styles.inner}>
                            <View style={styles.form}>
                                <Text style={styles.pickOrderTitle}>Pegar encomenda pelo código:</Text>
                                <TextInput
                                        style={styles.pickOrderInput}
                                        value={codeNumber}
                                        onChangeText={(text) => setCodeNumber(text)}
                                        placeholder='Código de entrega'
                                />
                                 {loading ? 
                                    <Loading />
                                :
                                    <Button 
                                        actionOnPress={ pickOrder }
                                        text={"Pegar encomenda"}
                                        type={"mainButton"}
                                    />
                                }
                            </View>
                        </View>
                        
                        <Footer />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}