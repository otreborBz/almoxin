import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "../../service/firebaseConnection";
import { doc, updateDoc, addDoc, collection } from "firebase/firestore";

export default function AddTool() {
  const navigation = useNavigation();
  const route = useRoute();
  const toolData = route.params?.toolData;

  const [name, setName] = useState(toolData?.name || "");
  const [codigoCompra, setCodigoCompra] = useState(toolData?.codigoCompra || "");
  const [descricao, setDescricao] = useState(toolData?.descricao || "");
  const [localizacao, setLocalizacao] = useState(toolData?.localizacao || "");
  const [maquina, setMaquina] = useState(toolData?.maquina || "");
  const [numeroFabricante, setNumeroFabricante] = useState(toolData?.numeroFabricante || "");

  // Popula os estados com os dados recebidos (se houver)
  useEffect(() => {
    if (toolData) {
      setName(toolData.name || "");
      setCodigoCompra(toolData.codigoCompra || "");
      setDescricao(toolData.descricao || "");
      setLocalizacao(toolData.localizacao || "");
      setMaquina(toolData.maquina || "");
      setNumeroFabricante(toolData.numeroFabricante || "");
    }
  }, [toolData]);

  async function handleAdd() {
    if (!name || !maquina || !descricao || !numeroFabricante || !codigoCompra || !localizacao) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      if (toolData) {
        await updateDoc(doc(db, "tools", toolData.id), {
          name,
          maquina,
          descricao,
          numeroFabricante,
          codigoCompra,
          localizacao,
        });
        Alert.alert("Sucesso", "Ferramenta atualizada com sucesso!");
      } else {
        await addDoc(collection(db, "tools"), {
          name,
          maquina,
          descricao,
          numeroFabricante,
          codigoCompra,
          localizacao,
          created: new Date(),
        });
        Alert.alert("Sucesso", "Ferramenta cadastrada com sucesso!");
      }
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar:", error);
      Alert.alert("Erro", "Não foi possível salvar a ferramenta.");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome da linha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da linha"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Máquina</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da máquina"
            value={maquina}
            onChangeText={setMaquina}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a descrição"
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número do fabricante</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o número do fabricante"
            value={numeroFabricante}
            onChangeText={setNumeroFabricante}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Código de compra</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o código de compra"
            value={codigoCompra}
            onChangeText={setCodigoCompra}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Localização</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a localização"
            value={localizacao}
            onChangeText={setLocalizacao}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonCancel]}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText, styles.buttonTextCancel]}>
            Cancelar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleAdd}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            {toolData ? "Atualizar" : "Cadastrar"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
