import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import ButtonFloat from '../iconFeather';

import { signOut } from 'firebase/auth';
import {auth} from '../../service/firebaseConnection';

export default function Header({placeHolder, icon, user}) {

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

  function openPage(){
    if (icon === 'addfile'){
      navigation.navigate('AddTool');
      return;
    }
    navigation.navigate('AddUser');
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
          <TextInput placeholder={"Busque por " + placeHolder} style={styles.input} />
          <TouchableOpacity >
            <Feather name="search" size={25} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.areaAdd}>
          <TouchableOpacity style={styles.button} onPress={openPage}>
            <ButtonFloat icon={icon}/>
          </TouchableOpacity>
        </View>
      </View>
     
    </View>
  );
}
