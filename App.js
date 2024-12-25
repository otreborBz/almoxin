import React from "react";

import { NavigationContainer } from '@react-navigation/native';// importa a navevegacao do react native
import StackRoutes from './src/router/stackRoutes'

export default function App(){
  return(
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  )
}