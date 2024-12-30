import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';// importa o tipo da nevagecao do react native

//Paginas
import User from '../pages/User';
import Tool from '../pages/Tool';

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
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#666666',
        }}
      >

        <Tab.Screen
          name='User'
          component={User}
          options={{
            tabBarIcon: ({ color, size }) => { return <Feather name='users' color={color} size={size} /> }
          }} />

        <Tab.Screen
          name='Tool'
          component={Tool}
          options={{
            tabBarIcon: ({ color, size }) => { return <Feather name='file-text' color={color} size={size} /> }
          }} />


      </Tab.Navigator>
  );
}


