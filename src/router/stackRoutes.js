import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from '../color';
import Routes from './routes';
import Welcome from '../pages/welcome';

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
        name="Routes" 
        component={Routes} 
      />
    </Stack.Navigator>
  )
}
