import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Logo from '../../component/Logo';

export default function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Tool');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F9FAFB" barStyle="dark-content" />
      
      <Animatable.View 
        animation="fadeIn" 
        delay={500} 
        style={styles.logoContainer}
      >
        <Logo size="large" />
        <Animatable.Text 
          animation="fadeInUp"
          delay={1000}
          style={styles.subtitle}
        >
          Procurou? Achou!
        </Animatable.Text>
      </Animatable.View>

      <Animatable.View 
        style={styles.footer} 
        animation="fadeInUp"
        delay={1200}
      >
        <Text style={styles.description}>
          Gerencie seu inventário de forma{'\n'}simples e eficiente
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleStart}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Acessar</Text>
          <Feather name="arrow-right" size={20} color="#FFF" style={styles.buttonIcon} />
        </TouchableOpacity>

        <Text style={styles.version}>
          Desenvolvido por CodeBr • v1.0.0
        </Text>
      </Animatable.View>
    </View>
  );
}
