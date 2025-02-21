import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from './src/pages/welcome';
import Tool from './src/pages/tool';
import AddItem from './src/pages/addItem';
import colors from './src/color';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Tool" component={Tool} />
        <Stack.Screen 
          name="AddItem" 
          component={AddItem}
          options={{
            headerShown: true,
            headerTitle: '',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}