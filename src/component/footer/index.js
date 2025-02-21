import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../color';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather name="code" size={14} color={colors.textSecondary} />
        <Text style={styles.text}>
          Code BR • Roberto Carvalho
        </Text>
      </View>
      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
} 