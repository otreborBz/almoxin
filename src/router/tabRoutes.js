import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';// importa o tipo da nevagecao do react native

//Paginas
import Usuario from '../pages/User';
import Peca from '../pages/Tool';

//Icones
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}
      >

        <Tab.Screen
          name='Usuario'
          component={Usuario}
          options={{
            tabBarIcon: ({ color, size }) => { return <Feather name='users' color={color} size={size} /> }
          }} />

        <Tab.Screen
          name='Peca'
          component={Peca}
          options={{
            tabBarIcon: ({ color, size }) => { return <Feather name='file-text' color={color} size={size} /> }
          }} />


      </Tab.Navigator>
  );
}


