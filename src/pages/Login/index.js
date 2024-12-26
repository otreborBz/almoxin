import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import styles from './style'


export default function Login() {

  const navigation = useNavigation();

  function abrirTelaUsuario() {
    navigation.navigate('TabRoutes');
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentImage} >
        <Image style={styles.image} source={require('../../image/logoAlmoxin.png')} />
        <Text style={styles.text}>Login</Text>
      </View>

      <View style={styles.contentInput}>
        <TextInput
          style={styles.input}
          placeholder='Email...'
          inputMode='email'
        />
        <TextInput
          style={styles.input}
          placeholder='Senha...'
        />
        <TouchableOpacity style={styles.button} onPress={abrirTelaUsuario}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textTermo}>Termos de Uso</Text>
      </View>
      
        
    
    </View>
  );
}

