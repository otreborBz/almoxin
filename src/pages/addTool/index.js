import React, { useState, useEffect } from "react";
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
import { doc, updateDoc, addDoc, collection } from "firebase/firestore";

export default function AddTool({ route }) {
  const { toolData } = route.params || {}; // Dados enviados via navegação
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [codigoCompra, setCodigoCompra] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [maquina, setMaquina] = useState("");
  const [numeroFabricante, setNumeroFabricante] = useState("");

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


  async function handleSave() {
    try {
      if (!name || !maquina || !localizacao) {
        Alert.alert("Erro", "Por favor, preencha os campos obrigatórios");
        return;
      }

      const formattedName = name.toUpperCase();
      const formattedMaquina = maquina.toUpperCase();
      const formattedDescricao = descricao ? descricao.toUpperCase() : '';
      const formattedCodigoCompra = codigoCompra ? codigoCompra.toUpperCase() : '';
      const formattedLocalizacao = localizacao.toUpperCase();
      const formattedNumeroFabricante = numeroFabricante ? numeroFabricante.toUpperCase() : '';

      if (toolData?.id) {

        await updateDoc(doc(db, "tools", toolData.id), {
          name: formattedName,
          codigoCompra: formattedCodigoCompra,
          descricao: formattedDescricao,
          localizacao: formattedLocalizacao,
          maquina: formattedMaquina,
          numeroFabricante: formattedNumeroFabricante,
        });
        Alert.alert("Sucesso", "Peça atualizada com sucesso!");
      } else {

        await addDoc(collection(db, "tools"), {
          name: formattedName,
          codigoCompra: formattedCodigoCompra,
          descricao: formattedDescricao,
          localizacao: formattedLocalizacao,
          maquina: formattedMaquina,
          numeroFabricante: formattedNumeroFabricante,
        });
        Alert.alert("Sucesso", "Peça cadastrada com sucesso!");
      }

      navigation.goBack(); 
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
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
            <Text style={styles.textDescription}>
              {toolData ? "Editar Peça" : "Adicionar Peça"}
            </Text>
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Linha</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Máquina</Text>
            <TextInput
              style={styles.input}
              value={maquina}
              onChangeText={setMaquina}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Descrição</Text>
            <TextInput
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Número do fabricante</Text>
            <TextInput
              style={styles.input}
              value={numeroFabricante}
              onChangeText={setNumeroFabricante}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Código da compra</Text>
            <TextInput
              style={styles.input}
              value={codigoCompra}
              onChangeText={setCodigoCompra}
            />
          </View>

          <View style={styles.contentInput}>
            <Text style={styles.textInput}>Localização</Text>
            <TextInput
              style={styles.input}
              value={localizacao}
              onChangeText={setLocalizacao}
            />
          </View>

          <View style={styles.contentButton}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>
                {toolData ? "Atualizar" : "Salvar"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
