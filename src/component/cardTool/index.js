import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print'; 
import { db } from '../../service/firebaseConnection';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function CardTool({ id, name, maquina, descricao, numeroFabricante, codigoCompra, localizacao, role }) {
  const navigation = useNavigation();

  async function handleShare() {
    try {
      const htmlContent = `<html>
  <head>
      <style>
    body {
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
      background-color: #f4f7fc;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container {
      width: 70%;
      padding: 30px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    h1 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .content {
      margin-top: 20px;
    }
    .content .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #888;
      margin-top: 30px;
      border-top: 1px solid #ddd;
      padding-top: 10px;
    }
  </style>
  </head>
  <body>
    <div class="container">
      <h1>Almox.In | Detalhes</h1>
      <div class="content">
        <p class="section-title">Informações Básicas</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Máquina:</strong> ${maquina}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Número Fabricante:</strong> ${numeroFabricante}</p>
        <p><strong>Código Compra:</strong> ${codigoCompra}</p>
        <p><strong>Localização:</strong> ${localizacao}</p>
      </div>
      <div class="footer">
        <p>© 2025 Roberto de Carvalho. Todos os direitos reservados.</p>
      </div>
    </div>
  </body>
</html>

      `;

      const { uri } = await Print.printToFileAsync({ html: htmlContent });

      if (!(await Sharing.isAvailableAsync())) {
        Alert.alert('Erro', 'Compartilhamento não disponível neste dispositivo.');
        return;
      }

      await Sharing.shareAsync(uri, {
        mimeType: 'application/pdf',
        dialogTitle: 'Compartilhar detalhes da peça',
      });

      Alert.alert('Sucesso', 'PDF gerado e compartilhado com sucesso!');
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      Alert.alert('Erro', 'Não foi possível gerar e compartilhar o PDF.');
    }
  }

  async function handleDeleteTool() {
    if (role !== 'admin') {
      Alert.alert('Acesso Negado', 'Você não tem permissão para excluir.');
      return;
    }

    Alert.alert('Excluir', 'Deseja realmente excluir?', [
      { text: 'Não', style: 'cancel' },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await deleteDoc(doc(db, 'tools', id));
            Alert.alert('Sucesso', 'Ferramenta excluída com sucesso!');
          } catch (error) {
            console.error('Erro ao excluir:', error);
            Alert.alert('Erro', 'Não foi possível excluir a ferramenta.');
          }
        },
      },
    ]);
  }

  async function handleEditTool() {
    if (role !== 'admin') {
      Alert.alert('Acesso Negado', 'Você não tem permissão para editar.');
      return;
    }

    try {
      const docSnap = await getDoc(doc(db, 'tools', id));
      if (docSnap.exists()) {
        const toolData = { id: docSnap.id, ...docSnap.data() };
        navigation.navigate('AddTool', { toolData, role });
      } else {
        Alert.alert('Erro', 'Ferramenta não encontrada.');
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      Alert.alert('Erro', 'Não foi possível carregar os dados para edição.');
    }
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
          <Text style={styles.text}>DESCRIÇÃO:</Text>
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
          <Text style={styles.text}>LOCALIZAÇÃO:</Text>
          <Text style={styles.text}>{localizacao}</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.share} onPress={handleDeleteTool}>
            <Feather name="trash-2" size={25} color={'#808080'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.share} onPress={handleEditTool}>
            <Feather name="edit" size={25} color={'#808080'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.share} onPress={handleShare}>
            <Feather name="send" size={25} color={'#808080'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
