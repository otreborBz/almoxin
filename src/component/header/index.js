import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './style';
import Logo from '../Logo';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../../service/firebaseConnection';
import colors from '../../color';

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

  function emptyInput() {
    setTextSearch('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <View style={styles.logoContainer}>
          <Logo size="small" />
          <Text style={styles.welcome}>Olá, <Text style={styles.userName}>{user}</Text></Text>
        </View>

        <TouchableOpacity 
          style={styles.exitButton} 
          onPress={exit}
          activeOpacity={0.7}
        >
          <Feather name="log-out" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder={`Buscar ${placeHolder}...`}
            placeholderTextColor={colors.textSecondary}
            value={textSearch}
            onChangeText={(text) => setTextSearch(text)}
          />
          <TouchableOpacity 
            onPress={() => onSearch(textSearch)}
            style={styles.searchButton}
          >
            <Feather name="search" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={onUpdate} 
          onPressOut={emptyInput}
        >
          <Feather name="refresh-ccw" size={20} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={handleAddTool}
        >
          <Feather name={icon === 'addfile' ? 'plus-circle' : 'user-plus'} size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
