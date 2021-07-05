import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';

import { Camera } from 'expo-camera';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { AlertModal } from '../../components/AlertModal';

import { styles } from './styles'

import { detectFace } from '../../utils/registerUser';

export function RegisterUserFace({ route }) {
    const {name, role} = route.params;

    const [hasPermission, setHasPermission] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [succeded, setSucceded] = useState();

    const camRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === false) {
        return <Text>Acesso à câmera negado</Text>;
    }

    async function registerUser() {
        setLoading(true);

        if(camRef) {
            const data = await camRef.current.takePictureAsync({ base64: true });
            const res = await fetch(`data:'application/octet-stream';base64,${data.base64}`);
            const img = await res.blob();

            const result = await detectFace(img, name, role);

            setModalVisible(true);
            if(result.status === "error") {
                setSucceded(false);
                setModalMessage(result.message);
            } else {
                setSucceded(true);
                setModalMessage(result.message);
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

            <Camera 
                style={styles.camera} 
                type={Camera.Constants.Type.front} 
                ref={camRef}
            >
                <View style={styles.buttonWrap}>
                    {loading ? 
                        <Loading />
                    :
                        <Button 
                            actionOnPress={ registerUser }
                            text={"Registrar"}
                            type={"mainButton"}
                        />
                    }
                </View>
            </Camera>

            <Footer />
        </View>
    )
}