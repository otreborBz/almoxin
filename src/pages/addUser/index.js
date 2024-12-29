import React from "react";
import {SafeAreaView, TextInput, View, Text, TouchableOpacity} from 'react-native';
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function AddUser(){

  const navigation = useNavigation();

  function backPage(){
    navigation.goBack();
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.textName}>Almox.in</Text>
        <Text style={styles.textDescription}>adicione peças</Text>
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.textInput}>Nome</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.textInput}>Email</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.contentInput}>
        <TouchableOpacity style={styles.buttonSenha}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
        <Text style={styles.textInput}>Senha ( clique para gerar a senha )</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.contentButton}>
        <TouchableOpacity style={styles.button} onPress={backPage}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={backPage}>
          <Text style={styles.buttonText}>cancelar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}