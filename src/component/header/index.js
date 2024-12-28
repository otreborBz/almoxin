import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({placeHolder}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.textLogo}>Almox.in</Text>
        <Text style={styles.welcomeText}>Seja Bem-vindo Roberto</Text>
        <TouchableOpacity>
          <Icon name="logout" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentSearch}>
        <TextInput placeholder={"Busque por "+ placeHolder } style={styles.input} />
        <TouchableOpacity>
          <Icon name="account-search-outline" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
