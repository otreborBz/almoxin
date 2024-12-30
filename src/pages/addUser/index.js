import React, { useState } from "react";
import {SafeAreaView, TextInput, View, Text, TouchableOpacity, Alert} from 'react-native';
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../service/firebaseConnection'

export default function AddUser(){

  const navigation = useNavigation();
  const [name, setName]= useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function createUser(){ 
    console.log('clicado')
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(
      Alert.alert('Criado', 'Usuário criado com sucesso.'),
      navigation.goBack()
    )
    .catch((err)=>{
      Alert.alert('Erro', 'Não foi possive criar usuário, dados incorretos');
    })

  }

  function generateRandomPassword() {
    const newPassword = Math.random().toString(36).substring(2, 8);
    setPassword(newPassword);
  }


  function backPage(){
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
          onChangeText={(text)=> setName(text)}
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
        <TouchableOpacity style={styles.buttonSenha} onPress={generateRandomPassword}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
        <Text style={styles.textInput}>Senha (clique para gerar a senha)</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Sua senha aparecerá aqui"
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
  )
}