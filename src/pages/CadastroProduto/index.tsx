import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { style } from "./styles";
import { Input } from "../../components/input";

export default function CadastroProduto() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [loading, setLoading] = useState(false);

    function handleCadastrar() {
        if (!nome || !preco || !quantidade) {
            return Alert.alert('Atenção', 'Preencha todos os campos obrigatórios!');
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            Alert.alert('Sucesso', 'Produto registrado no estoque com sucesso!');
            setNome('');
            setPreco('');
            setQuantidade('');
        }, 1500);
    }

    return (
        <ScrollView 
            style={{ flex: 1, width: '100%', backgroundColor: '#FFFFFF' }}
            contentContainerStyle={style.container}
            keyboardShouldPersistTaps="handled"
        >
            {/* Cabeçalho Corporativo */}
            <View style={style.header}>
               <AntDesign name="product" size={50} color="#1E5AA8" />
                <Text style={style.headerTitle}>Novo Produto</Text>
            </View>

            {/* Formulário Modular */}
            <View style={style.form}>
                <Input
                    title="Nome"
                    placeholder="Nome do Produto"
                    value={nome}
                    onChangeText={setNome}
                    IconLeft={Octicons}
                    iconLeftName="tag"
                />

                <Input
                    title="Preço"
                    placeholder="R$ 0,00"
                    keyboardType="numeric"
                    value={preco}
                    onChangeText={setPreco}
                    IconLeft={FontAwesome}
                    iconLeftName="dollar"
                />

                <Input
                    title="Quantidade de Entrada"
                    placeholder="0"
                    keyboardType="numeric"
                    value={quantidade}
                    onChangeText={setQuantidade}
                    IconLeft={Octicons}
                    iconLeftName="package"
                />
            </View>

            {/* Botão de Ação */}
            <View style={style.boxBottom}>
                <TouchableOpacity 
                    style={style.button} 
                    onPress={handleCadastrar} 
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#FFFFFF" size="small" />
                    ) : (
                        <Text style={style.buttonText}>CADASTRAR PRODUTO</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}