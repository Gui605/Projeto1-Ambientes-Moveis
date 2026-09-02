import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

type LoginProps = {
    onLoginSuccess?: () => void;
};

export default function Login({ onLoginSuccess }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            if (!email || !password) {
                setLoading(false);
                return Alert.alert('Atenção', 'Informe os campos obrigatórios');
            }

            setLoading(true);

            setTimeout(() => {
                if (email === 'abdielb@yahoo.com' && password === '12345') {
                    Alert.alert('Logado com sucesso');
                    onLoginSuccess?.();
                } else {
                    Alert.alert('Usuario não encontrado');
                }

                setLoading(false);
            }, 1500);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                />

                <Text style={style.text}>Bem Vindo de volta !</Text>
                <Text style={style.text}>Faça login com email "abdielb@yahoo.com" e senha "12345" para continuar</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de e-mail</Text>

                <View style={style.BoxInput}>
                    <TextInput
                        style={style.Input}
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <MaterialIcons name="email" size={20} color={themas.Colors.gray} />
                </View>

                <Text style={style.titleInput}>Senha</Text>

                <View style={style.BoxInput}>
                    <TextInput
                        style={style.Input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <MaterialIcons name="password" size={20} color={themas.Colors.gray} />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color={'#FFFFFF'} size={'small'} />
                    ) : (
                        <Text style={style.textButton}>Entrar</Text>
                    )}
                </TouchableOpacity>
            </View>

            <Text style={style.textBottom}>Não tem conta ? <Text style={{ color: themas.Colors.primary }}>Crie agora !</Text></Text>
        </View>
    );
}
