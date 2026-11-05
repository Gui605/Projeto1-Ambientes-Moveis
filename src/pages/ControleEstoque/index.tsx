import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ControleEstoque() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }} contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="warehouse" size={45} color="#1E5AA8" />
                <Text style={styles.headerTitle}>Controle de Estoque</Text>
            </View>

            <View style={styles.card}>
                <View>
                    <Text style={styles.productName}>Notebook Gamer X</Text>
                    <Text style={styles.productQty}>Disponível: 12 unidades</Text>
                </View>
                <View style={[styles.badge, { backgroundColor: '#E2F0D9' }]}>
                    <Text style={[styles.badgeText, { color: '#385723' }]}>Em Estoque</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View>
                    <Text style={styles.productName}>Mouse Sem Fio</Text>
                    <Text style={styles.productQty}>Disponível: 2 unidades</Text>
                </View>
                <View style={[styles.badge, { backgroundColor: '#FCE4D6' }]}>
                    <Text style={[styles.badgeText, { color: '#C65911' }]}>Estoque Baixo</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, padding: 20, backgroundColor: '#F5F6FA' },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 25, gap: 12 },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#111' },
    card: { backgroundColor: '#FFF', padding: 16, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, elevation: 2 },
    productName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    productQty: { fontSize: 14, color: '#666', marginTop: 4 },
    badge: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
    badgeText: { fontSize: 12, fontWeight: 'bold' }
});