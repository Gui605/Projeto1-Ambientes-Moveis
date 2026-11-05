import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Input } from '../../components/input';
import { styles } from './styles';

export default function SaidaProduto() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }} contentContainerStyle={styles.container}>
            <View style={styles.header}>
                
            </View>

            <View style={styles.form}>
                <Input
                    title="Nome do Produto"
                    placeholder="Ex: Teclado Mecânico"
                    value=""
                    onChangeText={() => {}}
                />
                <Input
                    title="Quantidade de Saída"
                    placeholder="0"
                    keyboardType="numeric"
                    value=""
                    onChangeText={() => {}}
                />
                
                {/* Simulação visual do campo de seleção/lista suspensa */}
                <Text style={styles.label}>Motivo da Retirada</Text>
                <View style={styles.pickerBox}>
                    <Text style={styles.pickerText}>Venda / Avarias / Uso Interno (Selecionar)</Text>
                    <FontAwesome5 name="chevron-down" size={14} color="#666" />
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>REGISTRAR SAÍDA</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}