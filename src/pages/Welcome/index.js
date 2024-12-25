import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Login from '../Login';




export default function Welcome() {
  const navigation = useNavigation();

  function abrirTelaLogin() {
    navigation.navigate('Login')
  }


  return (
    <View style={styles.container}>
      <Text>Tela Welcome</Text>
      <TouchableOpacity style={styles.btn} onPress={abrirTelaLogin}>
        <Text style={styles.btnText}>Ir pagina Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  btnText:{
    color: '#fff'
  }
});