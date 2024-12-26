import React from 'react';
import { View, Text, SafeAreaView,} from 'react-native';
import styles from './style';



export default function CardUsuario({id, nome, email}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>ID:</Text>
        <Text style={styles.text}>{id}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>NOME:</Text>
        <Text style={styles.text}>{nome}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>EMAIL:</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
    </SafeAreaView>
  );
}