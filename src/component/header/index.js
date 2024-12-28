import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import ButtonFloat from '../../component/buttonFloat';

export default function Header({placeHolder}) {

  const navigation = useNavigation();

function exit(){
  Alert.alert('Desconectar Usuário', 'Deseja realmente Sair', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressionado'),
      style: 'cancel',
    },
    { 
      text: 'OK', onPress: () => {
        navigation.navigate('Welcome');
      } 
    },
  ]);
}

  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.textLogo}>Almox.in</Text>
        <Text style={styles.welcomeText}>Bem-vindo Roberto</Text>
        <TouchableOpacity onPress={exit}>
          <Ionicons name="exit" size={30} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentSearch}>
        <View style={styles.areaSearch}>
          <TextInput placeholder={"Busque por " + placeHolder} style={styles.input} />
          <TouchableOpacity >
            <Feather name="search" size={25} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.areaAdd}>
          <TouchableOpacity style={styles.button}>
            <ButtonFloat />
          </TouchableOpacity>
        </View>  
      </View>
     
    </View>
  );
}
