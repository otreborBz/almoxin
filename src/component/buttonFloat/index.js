import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style'

import Feather from 'react-native-vector-icons/AntDesign'

export default function ButtonFloat({ style, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Feather name='adduser' color={'#000'} size={25}/>
    </TouchableOpacity>
  );
}

