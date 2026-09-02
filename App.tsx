import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/pages/login';
import CadastroProduto from './src/pages/CadastroProduto';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'cadastro'>('login');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {currentScreen === 'login' ? (
        <Login onLoginSuccess={() => setCurrentScreen('cadastro')} />
      ) : (
        <CadastroProduto />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});