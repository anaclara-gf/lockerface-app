import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    TouchableWithoutFeedback, 
    Keyboard,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { AlertModal } from '../../components/AlertModal';
import { ConfirmModal } from '../../components/ConfirmModal';

import { styles } from './styles';
import { theme } from '../../global/theme';
import BackgroundImage from '../../assets/background-orange-waves.jpg';

import { packagesSize  } from '../../utils/packagesSizes';

export function RegisterOrder() {
    const [fullName, setFullName] = useState(null);
    const [codeNumber, setCodeNumber] = useState(null);
    const [packageSize, setPackageSize] = useState('');
    const [packageName, setPackageName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [succeded, setSucceded] = useState();
    const [loading, setLoading] = useState(false);

    function handlePackageChoice(sizeId, name) {
        sizeId === packageSize ? setPackageSize('') : setPackageSize(sizeId);
        sizeId === packageSize ? setPackageName('') : setPackageName(name);
    }

    function handleConfirmData() {
        if(!fullName || !codeNumber || packageSize === ''){
            setModalVisible(true);
            setSucceded(false);
            setModalMessage("Dados insuficientes para fazer o cadastro da entrega");
            setLoading(false);
        } else {
            setConfirmModalVisible(true);
            setModalMessage(
                <Text>
                    Os dados da entrega estão corretos? {`\n`}
                    Nome do destinatário: {`\n`}
                    {fullName} {`\n`}
                    Código da entrega: {`\n`}
                    {codeNumber} {`\n`}
                    Tamanho da encomenda: {`\n`}
                    {packageName} {`\n`}
                </Text>
            );
            setLoading(false);
        }
    }

    async function handleRegisterOrder() {
        setLoading(true);

        const fetchInfo = {
            'method': 'POST',
            'headers': {'Content-Type': "application/json"},
            'body': JSON.stringify({
                "size": packageSize,
                "packageCode": codeNumber,
                "name": fullName 
            })
        }
    
        const url = 'https://lockerface-api.herokuapp.com';
    
        try {
            const response = await fetch(`${url}/lockers/${packageSize}`);
            const searchLocker = await response.json();
            if(searchLocker.error) {
                const errorMessage = 
                    <Text>
                        Não há lockers disponíveis no tamanho escolhido. {`\n`}
                        Escolha um locker maior ou tente novamente mais tarde.   
                    </Text>
                setConfirmModalVisible(false);
                setModalVisible(true);
                setSucceded(false);
                setModalMessage(errorMessage)
            } else {
                const result = await fetch(`${url}/packages`, fetchInfo);
                const data = await result.json();
                const sucessMessage =
                    <>
                        <Text style={styles.modalText}>
                            Cadastro feito com sucesso{`\n`}
                            Por favor, colocar a encomenda no{`\n`}
                        </Text>
                        <Text style={styles.modalTextBold}>
                            ARMÁRIO {data.lockerNumber}{`\n`}
                        </Text>
                        <Text style={styles.modalText}>
                            O armário já está desbloqueado!{`\n`}
                            Feche o armário ao terminar
                        </Text>
                    </>
                setConfirmModalVisible(false);
                setModalVisible(true);
                setSucceded(true);
                setModalMessage(sucessMessage);
            }
        } catch(err) {
            setConfirmModalVisible(false);
            setModalVisible(true);
            setSucceded(false);
            setModalMessage("Internal Error");
        }
        setLoading(false); 
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
                    <ScrollView tyle={styles.inner}>
                        <AlertModal
                            setModalVisible={setModalVisible}
                            modalVisible={modalVisible}
                            message={modalMessage}
                            succeded={succeded}
                        />

                        <ConfirmModal
                            setModalVisible={setConfirmModalVisible}
                            modalVisible={confirmModalVisible}
                            message={modalMessage}
                            actionOnConfirm={handleRegisterOrder}
                            loading={loading}
                        />
                        
                        <Header />
                        <View style={styles.registerForm}>
                            <Text style={styles.registerTitle}>Cadastre a encomenda:</Text>
                            <TextInput
                                style={styles.registerInput}
                                value={fullName}
                                onChangeText={(text) => setFullName(text)}
                                placeholder='Nome completo do destinatário'
                            />
                            <TextInput
                                style={styles.registerInput}
                                value={codeNumber}
                                onChangeText={(text) => setCodeNumber(text)}
                                placeholder='Código de entrega'
                            />
                            <Text style={styles.packageTitle}>
                                Tamanho da encomenda:
                            </Text>

                            <View style={styles.packageList}>
                                {packagesSize.map(eachPackage => {
                                    return (
                                        <RectButton
                                            key={eachPackage.name}
                                            onPress={() => handlePackageChoice(eachPackage.sizeId, eachPackage.name)}
                                            style={[
                                                styles.packageButton,
                                                {backgroundColor: eachPackage.sizeId === packageSize ? theme.colors.orange : theme.colors.white}
                                            ]}
                                        >
                                            <Text style={[
                                                styles.packageButtonTextTitle,
                                                {color: eachPackage.sizeId === packageSize ? theme.colors.white : theme.colors.orange}
                                            ]}>
                                                {eachPackage.name} 
                                            </Text>
                                            <Text style={[
                                                styles.packageButtonTextSize,
                                                {color: eachPackage.sizeId === packageSize ? theme.colors.white : theme.colors.orange}
                                            ]}>
                                                {eachPackage.size} 
                                            </Text>
                                        </RectButton>
                                    )
                                })}
                            </View>
                            {loading ? 
                                <Loading />
                            :
                                <Button 
                                    actionOnPress={ handleConfirmData }
                                    text={"Cadastrar"}
                                    type={"mainButton"}
                                />
                            }
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <Footer />
        </ImageBackground>
    );
}