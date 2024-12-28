import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import AddTool from '../pages/addTool';
import TabRoutes from '../router/tabRoutes';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AddTool" component={AddTool} />

      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
