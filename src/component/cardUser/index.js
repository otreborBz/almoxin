import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather'

export default function CardUser({ name, email, password }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>NOME:</Text>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>EMAIL:</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>SENHA:</Text>
        <View>
          {isPasswordVisible ? (
            <Text style={styles.text}>{password}</Text>
          ) : (
            <Text style={styles.text}>********</Text>
          )}
          
        </View>
        
      </View>
      <View style={styles.contentPassword}>
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.buttonPassword}>
          <Text>{isPasswordVisible ? <Feather name={'eye-off'} size={24} color={'#fff'} /> : <Feather name={'eye'} size={24} color={'#fff'} />}</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
} 
