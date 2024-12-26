import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './style'



export default function Welcome() {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../image/logoAlmoxin.png')} />
        <Text style={styles.textIcon}>Procurou? Achou!</Text>
        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.buttonEntrarText}>ENTRE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>ADMIN</Text>
        </TouchableOpacity>
        <Text>CodeBr | Roberto Carvalho</Text>
    </View>
  );
}

