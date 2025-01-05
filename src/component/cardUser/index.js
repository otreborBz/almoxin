import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './style';

export default function CardUser({name, email, password }) {
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
        <Text style={styles.text}>{password}</Text>
      </View>
    </SafeAreaView>
  );
}
