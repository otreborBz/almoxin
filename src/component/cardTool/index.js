import React from 'react';
import { View, Text, SafeAreaView,} from 'react-native';
import styles from './style';



export default function CardTool({id, name, maquina, descricao, numeroFabricante, codigoCompra, localizacao}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.content}>
        <Text style={styles.text}>ID:</Text>
        <Text style={styles.text}>{id}</Text>
      </View> */}

      <View style={styles.content}>
        <Text style={styles.text}>NOME:</Text>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>MÁQUINA:</Text>
        <Text style={styles.text}>{maquina}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>DESCRICAO:</Text>
        <Text style={styles.text}>{descricao}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>FABRICANTE:</Text>
        <Text style={styles.text}>{numeroFabricante}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>COD. COMPRA:</Text>
        <Text style={styles.text}>{codigoCompra}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>LOCALIZACAO:</Text>
        <Text style={styles.text}>{localizacao}</Text>
      </View>
    </SafeAreaView>
  );
}