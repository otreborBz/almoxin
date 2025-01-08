import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';

import { db } from '../../service/firebaseConnection'
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';


export default function CardTool({ id, name, maquina, descricao, numeroFabricante, codigoCompra, localizacao, role }) {
  const navigation = useNavigation();

  async function handleDeleteTool() {
    if (role !== "admin") {
      Alert.alert("Acesso Negado", "Você não tem permissão para excluir.");
      return;
    }

    Alert.alert("Excluir", "Deseja realmente excluir?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
            const docRef = doc(db, "tools", id);
            await deleteDoc(docRef);
            Alert.alert("Sucesso", "Peça excluída com sucesso!");
          } catch (error) {
            console.log("Erro ao excluir:", error);
            Alert.alert("Erro", "Não foi possível excluir a peça.");
          }
        },
      },
    ]);
  }

  async function handleEditTool() {

    if (role !== "admin") {
      Alert.alert("Acesso Negado", "Você não tem permissão para editar.");
      return;
    }
    try {
      Alert.alert("Editar", 'Deseja Editar?',[
        {
          text: "Não",
          style: "cancel",
        },{
          text: "Sim",
          onPress: async () => {
            try {
              const docSnap = await getDoc(doc(db, "tools", id));
              if (docSnap.exists()) {
                const toolData = { id: docSnap.id, ...docSnap.data() };
                navigation.navigate("AddTool", { toolData, role });
              } else {
                Alert.alert("Erro", "Peça não encontrada.");
              }
            } catch (error) {
              console.log("Erro ao carregar dados:", error);
              Alert.alert("Erro", "Não foi possível carregar os dados para edição.");
            }
          },
        }
      ]);
     
    } catch (error) {
      console.log("Erro ao carregar dados:", error);
      Alert.alert("Erro", "Não foi possível carregar os dados para edição.");
    }
  }

  function handleShare(){
    Alert.alert("Share", "Deseja realmente compartilhar?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
          } catch (error) {
            console.log("Erro ao excluir:", error);
            Alert.alert("Erro", "teste");
          }
        },
      },
    ]);
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.touch}>

        <View style={styles.content}>
          <Text style={styles.text}>NOME:</Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>MÁQUINA:</Text>
          <Text style={styles.text}>{maquina}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>DESCRICAO:</Text>
          <Text style={styles.text}>{descricao}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>FABRICANTE:</Text>
          <Text style={styles.text}>{numeroFabricante}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>COD. COMPRA:</Text>
          <Text style={styles.text}>{codigoCompra}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>LOCALIZACAO:</Text>
          <Text style={styles.text}>{localizacao}</Text>
        </View>

        <View style={styles.button}>

          <TouchableOpacity style={styles.share} onPress={handleDeleteTool}>
            <Feather name='trash-2' size={25} color={'#808080'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.share} onPress={handleEditTool}>
            <Feather name='edit' size={25} color={'#808080'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.share} onPress={handleShare}>
            <Feather name='send' size={25} color={'#808080'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}