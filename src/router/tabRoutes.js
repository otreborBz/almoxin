import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import User from '../pages/user';
import Tool from '../pages/tool';

const Tab = createBottomTabNavigator();

export default function Routes({ route }) {
  const { role } = route.params || {};
  console.log("tabRoutes:",role);

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
      {role === 'admin' && (
        <Tab.Screen
          name="User"
          component={User}
          initialParams={{ role }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="users" color={color} size={size} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Tool"
        initialParams={{ role }} 
        component={Tool}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-text" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
