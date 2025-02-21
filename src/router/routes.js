import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Tool from '../pages/tool';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen
        name="Tool"
        component={Tool}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="tool" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  );
} 