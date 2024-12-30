import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AddTool" component={AddTool} />
      <Stack.Screen name="AddUser" component={AddUser} />
      <Stack.Screen name="UserTool" component={UserTool} />

      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
