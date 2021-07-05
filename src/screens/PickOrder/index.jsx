import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Camera } from 'expo-camera';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { AlertModal } from '../../components/AlertModal';

import { styles } from './styles';

import { detectFace } from '../../utils/authenticateUser'

export function PickOrder() {
    const navigation = useNavigation();

    const camRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [succeded, setSucceded] = useState();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === false) {
        return <Text>Acesso à câmera negado</Text>;
    }

    async function takePicture() {
        setLoading(true);

        if(camRef) {
            const data = await camRef.current.takePictureAsync({ base64: true });
            const res = await fetch(`data:'application/octet-stream';base64,${data.base64}`);
            const img = await res.blob();

            const result = await detectFace(img);

            setModalVisible(true);
            if(result.status === "error") {
                setSucceded(false);
                setModalMessage(result.message);
            } else {
                setSucceded(true);
                if(result.message.totalLockers === 1) {
                    setModalMessage(
                        <>
                            <Text style={styles.modalTextBold}> Olá, {result.message.name} {`\n`}</Text>
                            <Text> Sua encomenda está localizada no {`\n`}</Text>
                            <Text style={styles.modalTextBold}> ARMÁRIO {result.message.lockerNumbers} {`\n`}</Text>
                            <Text> O armário já está desbloqueado! {`\n`}</Text>
                        </>
                    );
                } else {
                    setModalMessage(
                        <>
                            <Text style={styles.modalTextBold}> Olá, {result.message.name} {`\n`}</Text>
                            <Text> Suas encomendas estão localizadas nos {`\n`}</Text>
                            <Text style={styles.modalTextBold}> ARMÁRIOS {result.message.lockerNumbers} {`\n`}</Text>
                            <Text> Os armários já estão desbloqueados! {`\n`}</Text>
                        </>
                    )
                }
            }
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
             <AlertModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                message={modalMessage}
                succeded={succeded}
            />
            <Header />
            <Camera style={styles.camera} type={Camera.Constants.Type.front} ref={camRef}>
                <View style={styles.pickOrderButtonWrap}>
                    {loading ? 
                        <Loading />
                    :
                        <Button 
                            actionOnPress={ takePicture }
                            text={"Pegar encomenda"}
                            type={"mainButton"}
                        />
                    }

                    <Button 
                        actionOnPress={ () => navigation.navigate('PickOrderByCode') }
                        text={"Pegar pelo código"}
                        type={"secondaryButton"}
                    />
                </View>
            </Camera>
            <Footer />
        </View>
    );
}