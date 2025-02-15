import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Logo({ size = 'large' }) {
  return (
    <View style={styles.container}>
      <View style={[styles.logoBox, styles[size]]}>
        <Text style={[styles.logoText, styles[`${size}Text`]]}>A</Text>
      </View>
      {size === 'large' && (
        <Text style={styles.logoName}>Almoxin</Text>
      )}
    </View>
  );
} 