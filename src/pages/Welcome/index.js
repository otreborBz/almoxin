import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style'
import  * as Animatable from 'react-native-animatable';



export default function Welcome() {
  const navigation = useNavigation();

  function openScreenLogin(){
    navigation.navigate('Login');
  }


  return (
    <View style={styles.container}>
      <Animatable.View delay={200} animation='flipInY' >
        <Image style={styles.image} source={require('../../assets/logoAlmoxin.png')} />
      </Animatable.View>
      <Animatable.View delay={200} animation='rubberBand'>
        <Text style={styles.textIcon}>Procurou? Achou!</Text>
      </Animatable.View>
      <Animatable.View delay={200} animation='bounceInDown'>
        <TouchableOpacity style={styles.buttonEntrar} onPress={openScreenLogin}>
          <Text style={styles.buttonEntrarText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
      
      <Text>CodeBr | Roberto Carvalho</Text>
    </View>
  );
}

