import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './style';

import IconFeather from '../iconFeather';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import { signOut } from 'firebase/auth';
import { auth } from '../../service/firebaseConnection';

export default function Header({ placeHolder, icon, user, onUpdate, onSearch }) {
  const [textSearch, setTextSearch] = useState('');
  const navigation = useNavigation();

  function exit() {
    Alert.alert('Logout', 'Deseja realmente sair?', [
      {
        text: 'Não',
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
        },
      },
    ]);
  }

  function openPage() {
    navigation.navigate(icon === 'addfile' ? 'AddTool' : 'AddUser');
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
          <View style={styles.areaSearchInput}>
            <TextInput
              placeholder={`Busque por ${placeHolder}`}
              style={styles.input}
              value={textSearch}
              onChangeText={(text) => setTextSearch(text)}
            />
            <TouchableOpacity style={{marginLeft: 10}} onPress={() => onSearch(textSearch)}>
              <Feather name="search" size={25} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.areaSearchButton}>
            <TouchableOpacity onPress={onUpdate}>
              <Feather name="repeat" size={25} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.areaAddButton}>
          <TouchableOpacity style={styles.button} onPress={openPage}>
            <IconFeather icon={icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
