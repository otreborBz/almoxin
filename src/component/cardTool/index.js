import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import { db } from '../../service/firebaseConnection';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import colors from '../../color';

export default function CardTool({ id, name, maquina, descricao, numeroFabricante, codigoCompra, localizacao, role }) {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  const now = new Date();
  const dataFormatada = now.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }) + ` às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

  async function generatePDF() {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Detalhes da Ferramenta</title>
          <style>
            body {
              font-family: 'Helvetica', sans-serif;
              color: #333;
              line-height: 1.6;
              padding: 40px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #1a73e8;
              padding-bottom: 20px;
            }
            .title {
              color: #1a73e8;
              font-size: 24px;
              margin: 0;
            }
            .date {
              color: #666;
              font-size: 14px;
              margin-top: 10px;
            }
            .content {
              margin-top: 30px;
            }
            .section {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f8f9fa;
              border-radius: 8px;
            }
            .label {
              color: #1a73e8;
              font-weight: bold;
              font-size: 14px;
              margin-bottom: 5px;
            }
            .value {
              font-size: 16px;
              margin: 0;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 12px;
              color: #666;
              border-top: 1px solid #ddd;
              padding-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">Detalhes da Ferramenta</h1>
            <p class="date">Gerado em: ${dataFormatada}</p>
          </div>

          <div class="content">
            <div class="section">
              <div class="label">LINHA</div>
              <p class="value">${name}</p>
            </div>

            <div class="section">
              <div class="label">MÁQUINA</div>
              <p class="value">${maquina}</p>
            </div>

            <div class="section">
              <div class="label">DESCRIÇÃO</div>
              <p class="value">${descricao}</p>
            </div>

            <div class="section">
              <div class="label">NÚMERO DO FABRICANTE</div>
              <p class="value">${numeroFabricante}</p>
            </div>

            <div class="section">
              <div class="label">CÓDIGO DE COMPRA</div>
              <p class="value">${codigoCompra}</p>
            </div>

            <div class="section">
              <div class="label">LOCALIZAÇÃO</div>
              <p class="value">${localizacao}</p>
            </div>
          </div>

          <div class="footer">
            <p>Este documento foi gerado automaticamente pelo sistema de gerenciamento de ferramentas.</p>
            <p>ID do documento: ${id}</p>
            <p>Almox.In - Sistema de Gerenciamento de Ferramentas</p>
          </div>
        </body>
      </html>
    `;

    try {
      const file = await Print.printToFileAsync({
        html: htmlContent,
        base64: false,
      });

      await Sharing.shareAsync(file.uri);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      Alert.alert('Erro', 'Não foi possível gerar o PDF.');
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
      <TouchableOpacity style={styles.touch} onPress={() => setIsVisible(!isVisible)}>
        <View style={styles.content}>
          <Text style={styles.label}>LINHA:</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>DESCRIÇÃO:</Text>
          <Text style={styles.text}>{descricao}</Text>
        </View>

        {isVisible && (
          <>
            <View style={styles.content}>
              <Text style={styles.label}>MÁQUINA:</Text>
              <Text style={styles.text}>{maquina}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>FABRICANTE:</Text>
              <Text style={styles.text}>{numeroFabricante}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>COD. COMPRA:</Text>
              <Text style={styles.text}>{codigoCompra}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>LOCALIZAÇÃO:</Text>
              <Text style={styles.text}>{localizacao}</Text>
            </View>
          </>
        )}

        <View style={styles.button}>
          <TouchableOpacity style={styles.share} onPress={handleDeleteTool}>
            <Feather name="trash-2" size={22} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.share} onPress={handleEditTool}>
            <Feather name="edit" size={22} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.share} onPress={generatePDF}>
            <Feather name="share-2" size={22} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
