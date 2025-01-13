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

  function handleAddTool() {
    navigation.navigate(icon === 'addfile' ? 'AddTool' : 'AddUser');
  }

  function emptyInput(){
    setTextSearch('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Almox.In</Text>
        <Text style={styles.welcome}>Seja Bem-vindo <Text style={{ fontWeight: 'bold' }}>{user}</Text></Text>

        <TouchableOpacity style={styles.exitButton} onPress={exit}>
          <Ionicons name="exit" size={30} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentSearch}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.buttonSearch}
            placeholder={`Busque por ${placeHolder}`}
            value={textSearch}
            onChangeText={(text) => setTextSearch(text)}
          />
          <TouchableOpacity onPress={() => onSearch(textSearch)}>
            <Feather name="search" size={25} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtonWrapper}>
          <TouchableOpacity onPress={onUpdate} onPressOut={emptyInput}>
            <Feather name="repeat" size={25} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtonWrapper}>
          <TouchableOpacity onPress={handleAddTool}>
            <IconFeather icon={icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
