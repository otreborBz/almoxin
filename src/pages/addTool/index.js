import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { styles } from "./style";

import { useNavigation } from "@react-navigation/native";

import { db } from "../../service/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

export default function AddTool() {
  const [name, setName] = useState("");
  const [codigoCompra, setCodigoCompra] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [maquina, setMaquina] = useState("");
  const [numeroFabricante, setNumeroFabricante] = useState("");

  const navigation = useNavigation();

  async function createTool() {
    try {
      if (!name || !maquina || !localizacao) {
        Alert.alert("Erro", "Por favor, preencha os campos obrigatórios");
        return;
      }

      await addDoc(collection(db, "tools"), {
        name: name,
        codigoCompra: codigoCompra || "",
        descricao: descricao || "",
        localizacao: localizacao,
        maquina: maquina,
        numeroFabricante: numeroFabricante || "",
      });

      Alert.alert("Sucesso", "Peça cadastrada com sucesso!");

      setName("");
      setCodigoCompra("");
      setDescricao("");
      setLocalizacao("");
      setMaquina("");
      setNumeroFabricante("");

      backPage();
    } catch (err) {
      console.log("Erro ao criar peça:", err);
      Alert.alert("Erro", "Não foi possível cadastrar a peça. Tente novamente.");
    }
  }

  function backPage() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.contentHeader}>
            <Text style={styles.textName}>Almox.in</Text>
            <Text style={styles.textDescription}>adicione peças</Text>
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
            <Text style={styles.textInput}>Máquina</Text>
            <TextInput
              style={styles.input}
              value={maquina}
              onChangeText={(text) => setMaquina(text)}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Descrição</Text>
            <TextInput
              style={styles.input}
              value={descricao}
              onChangeText={(text) => setDescricao(text)}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Número do fabricante</Text>
            <TextInput
              style={styles.input}
              value={numeroFabricante}
              onChangeText={(text) => setNumeroFabricante(text)}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Código da compra</Text>
            <TextInput
              style={styles.input}
              value={codigoCompra}
              onChangeText={(text) => setCodigoCompra(text)}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Localização</Text>
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={(text) => setLocalizacao(text)}
            />
          </View>

          <View style={styles.contentButton}>
            <TouchableOpacity style={styles.button} onPress={createTool}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={backPage}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
