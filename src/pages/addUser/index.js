import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../service/firebaseConnection';

export default function AddUser() {

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  async function createUser() {
    if (!email || !password || !name) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;

      await setDoc(doc(db, 'users', uid), {
        name,
        email,
        password,
        role,
      });

      Alert.alert(
        'Sucesso',
        'Usuário criado com sucesso!',
        [{ text: 'OK', onPress: () => { } }]
      );
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      Alert.alert('Erro', 'Não foi possível criar o usuário. Verifique os dados e tente novamente.');
    }
  }

  function generateRandomPassword() {
    const newPassword = Math.random().toString(36).substring(2, 8);
    setPassword(newPassword);
  }

  function backPage() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.textName}>Almox.in</Text>
        <Text style={styles.textDescription}>Criar Usuário</Text>
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.textInput}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.textInput}>Senha (clique para gerar a senha)</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Sua senha aparecerá aqui"
        />
        <TouchableOpacity style={styles.buttonSenhaAction} onPress={generateRandomPassword}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
        
        
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.textInput}>Tipo de Usuário</Text>
        <TextInput
          style={styles.input}
          value={role}
          onChangeText={(text) => setRole(text)}
          placeholder="user ou admin"
        />
      </View>

      <View style={styles.contentButton}>
        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={backPage}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
