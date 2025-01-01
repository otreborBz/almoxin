import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './style';

import IconFeather from '../iconFeather';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../service/firebaseConnection';

export default function Header({ placeHolder, icon, user }) {

  const [textSearch, setTextSearch] = useState('');
  const navigation = useNavigation();

  function exit() {
    Alert.alert('Logout', 'Deseja realmente Sair?', [
      {
        text: 'Não',
        onPress: () => console.log('Cancel Pressionado'),
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await signOut(auth);
            navigation.navigate('Welcome');
          } catch (error) {
            console.log('Erro ao deslogar:', error);
          }
        }
      },
    ]);
  }

  function openPage() {
    if (icon === 'addfile') {
      navigation.navigate('AddTool');
      return;
    }
    navigation.navigate('AddUser');
  }

  function searchTool() {
    if (!textSearch) {
      Alert.alert('Erro', 'Por favor, insira uma palavra para buscar.');
      return;
    }

    const toolsCollection = collection(db, 'tools');
    const nameQuery = query(
      toolsCollection,
      where('name', '>=', textSearch),
      where('name', '<=', textSearch + '\uf8ff')
    );

    const descriptionQuery = query(
      toolsCollection,
      where('descricao', '>=', textSearch),
      where('descricao', '<=', textSearch + '\uf8ff')
    );

    const machineQuery = query(
      toolsCollection,
      where('maquina', '>=', textSearch),
      where('maquina', '<=', textSearch + '\uf8ff')
    );

    Promise.all([getDocs(nameQuery), getDocs(descriptionQuery), getDocs(machineQuery)])
      .then(([nameSnapshot, descriptionSnapshot, machineSnapshot]) => {
        const results = [];

        nameSnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        descriptionSnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        machineSnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });

        const uniqueResults = Array.from(new Set(results.map(a => a.id)))
          .map(id => results.find(a => a.id === id));

        if (uniqueResults.length > 0) {
          navigation.navigate('Tool', { searchResults: uniqueResults });
        } else {
          Alert.alert('Nenhum resultado encontrado', 'Nenhum item corresponde ao seu termo de busca.');
        }
      })
      .catch((error) => {
        console.log('Erro na busca:', error);
        Alert.alert('Erro', 'Ocorreu um erro na busca.');
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.textLogo}>Almox.in</Text>
        <TouchableOpacity onPress={exit}>
          <Ionicons name="exit" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentHeader}>
        <Text style={styles.welcomeText}>Bem-vindo {user}</Text>
      </View>

      <View style={styles.contentSearch}>
        <View style={styles.areaSearch}>
          <TextInput
            placeholder={"Busque por " + placeHolder}
            style={styles.input}
            value={textSearch}
            onChangeText={(text) => { setTextSearch(text) }}
          />
          <TouchableOpacity onPress={searchTool}>
            <Feather name="search" size={25} color="#000000" />
          </TouchableOpacity>
        </View>

        {user === 'Admin' && (
          <View style={styles.areaAdd}>
            <TouchableOpacity style={styles.button} onPress={openPage}>
              <IconFeather icon={icon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
