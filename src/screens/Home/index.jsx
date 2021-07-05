import React, { useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { AlertModal } from '../../components/AlertModal';

import { styles } from './styles';
import Logo from '../../assets/avanade-logo.png';
import BackgroundImage from '../../assets/background-orange-waves.jpg';
 
export function Home() {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [succeded, setSucceded] = useState();

    async function verifyLockers() {
        setLoading(true);
        const data = await fetch('https://lockerface-api.herokuapp.com/lockers');
        const lockers = await data.json();

        const findLockersAvailable = lockers.find(locker => locker.lockerIsAvailable === true);

        if(findLockersAvailable) {
            setLoading(false);
            {navigation.navigate('RegisterOrder')};
        } else {
            setLoading(false);
            setModalVisible(true);
            setSucceded(false);
            setModalMessage('Não há armários disponíveis no momento, tente novamente mais tarde!');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
            </View>

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
                <View style={styles.main}>
                    <Text style={styles.mainTitle}>
                        O que você gostaria de fazer?
                    </Text>
                    <View style={styles.buttonsWrap}>
                        {loading ? 
                            <Loading />
                        :
                            <Button 
                                actionOnPress={ verifyLockers }
                                text={"Entregar uma encomenda"}
                                type={"mainButton"}
                            />
                        }

                        <Button 
                            actionOnPress={() => navigation.navigate('PickOrder')}
                            text={"Pegar uma encomenda"}
                            type={"mainButton"}
                        />
                    </View>

                    <View style={styles.registerUser}>
                        <Text style={styles.registerUserText}>
                            Não tem cadastro?
                        </Text>
                        <Button 
                            actionOnPress={() => navigation.navigate('RegisterUser')}
                            text={"Registre-se"}
                            type={"textButton"}
                        />
                    </View>
                </View>

                <Footer />
            </ImageBackground>
        </View>
    );
}