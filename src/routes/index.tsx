import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import Login from '../pages/login';
import CadastroProduto from '../pages/CadastroProduto';
import SaidaProduto from '../pages/SaidaProduto';
import ControleEstoque from '../pages/ControleEstoque';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#1E5AA8',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 },
                headerTitleAlign: 'center',
                headerShown: true,
            })}
        >
            <Tab.Screen 
                name="Estoque" 
                component={ControleEstoque} 
                options={{
                    title: 'Controle de Estoque', 
                    tabBarLabel: 'Estoque',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="warehouse" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Cadastro" 
                component={CadastroProduto} 
                options={{
                    title: 'Novo Produto',
                    tabBarLabel: 'Cadastro',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add-box" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Saida" 
                component={SaidaProduto} 
                options={{
                    title: 'Saída deProdutos',
                    tabBarLabel: 'SaídaㅤdeㅤProdutos',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="sign-out-alt" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={TabRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}