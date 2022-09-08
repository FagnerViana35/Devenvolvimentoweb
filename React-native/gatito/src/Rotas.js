import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: cores.roxo,// Qdo clica na palavra ela fica da cor active a cor
        inactiveTintColor: cores.claro,// Qdo sai e clica em outro  desativa na palavra ela fica da cor active a cor
        activeBackgroundColor: cores.roxo, //Mesmo caso com o ativa a cor o back ground
        inactiveBackgroundColor: cores.laranja,// desativa a cor do background
        style:{
          height: 70,
        },
        labelStyle:{
          width:'100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginBottom: 3,
          paddingTop: 21,
          paddingBottom: 15,
          backgroundColor:cores.laranja,
        }, 
        keyboardHidesTabBar: true,// Quando abre o teclado a navBar NÂO aparece
      }}>
      <Tab.Screen name="Serviços" component={Servicos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  </NavigationContainer>
}
