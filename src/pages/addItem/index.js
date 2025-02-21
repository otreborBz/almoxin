import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { addNewItem } from '../../service/dataService';

export default function AddItem() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    Item: '',
    "Item Description": '',
    Org: 'BC1',
    Sub: '',
    Locator: '',
    "Primary UOM": 'EA',
    Rev: null
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.Item || !formData["Item Description"] || !formData.Locator) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }

    try {
      addNewItem(formData);
      Alert.alert('Sucesso', 'Item adicionado com sucesso!', [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível adicionar o item');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Text style={styles.title}>Adicionar Nova Peça</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Código do Item *</Text>
          <TextInput
            style={styles.input}
            value={formData.Item}
            onChangeText={(text) => handleChange('Item', text)}
            placeholder="Ex: J903165"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descrição *</Text>
          <TextInput
            style={styles.input}
            value={formData["Item Description"]}
            onChangeText={(text) => handleChange('Item Description', text)}
            placeholder="Descrição do item"
            multiline
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Localização *</Text>
          <TextInput
            style={styles.input}
            value={formData.Locator}
            onChangeText={(text) => handleChange('Locator', text)}
            placeholder="Ex: G03.G2.D0.2A"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Subinventário</Text>
          <TextInput
            style={styles.input}
            value={formData.Sub}
            onChangeText={(text) => handleChange('Sub', text)}
            placeholder="Ex: RAWFMBU2"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 