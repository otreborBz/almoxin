import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import styles from './style';

import { auth } from '../../service/firebaseConnection';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const isAdmin = user.email === 'admin@admin.com';
        const role = isAdmin ? 'admin' : 'user';
        navigation.navigate('TabRoutes', { role });
      }
    });
    return () => unsubscribe();
  }, []);

  function handleLogin() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const role = email === 'admin@admin.com' ? 'admin' : 'user';
        navigation.replace('TabRoutes', { role });
      })
      .catch((error) => {
        Alert.alert('Erro', 'Não foi possível fazer login. Verifique suas credenciais.');
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentImage}>
        <Image style={styles.image} source={require('../../assets/logoAlmoxin.png')} />
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.contentInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textTermo}>Termos de Uso</Text>
      </View>
    </SafeAreaView>
  );
}
