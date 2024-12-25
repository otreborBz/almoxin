import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default function Login() {

  const navigation = useNavigation();

  function abrirTelaUsuario() {
    navigation.navigate('TabRoutes');
  }

  return (
    <View style={styles.container}>
      <Text>Tela Login</Text>
      <TouchableOpacity style={styles.btn} onPress={abrirTelaUsuario}>
        <Text style={styles.btnText}>Ir pagina Usuario</Text>
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
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
});