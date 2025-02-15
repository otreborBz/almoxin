import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from '../color';

import Welcome from '../pages/welcome';
import Login from '../pages/login';
import UserTool from '../pages/userTool';
import AddTool from '../pages/addTool';
import AddUser from "../pages/addUser"
import TabRoutes from '../router/tabRoutes';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
        animation: 'slide_from_right',
        navigationBarColor: colors.background,
        statusBarColor: colors.background,
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{
          animation: 'fade',
        }}
      />
      
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          animation: 'slide_from_right',
        }}
      />
      
      <Stack.Screen 
        name="AddTool" 
        component={AddTool}
        options={{
          headerShown: true,
          headerTitle: 'Adicionar Peça',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerShadowVisible: false,
        }}
      />
      
      <Stack.Screen 
        name="AddUser" 
        component={AddUser}
        options={{
          headerShown: true,
          headerTitle: 'Adicionar Usuário',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerShadowVisible: false,
        }}
      />
      
      <Stack.Screen 
        name="UserTool" 
        component={UserTool}
        options={{
          headerShown: true,
          headerTitle: 'Detalhes da Peça',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ 
          headerShown: false,
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  )
}
