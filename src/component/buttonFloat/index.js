import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style'

import Feather from 'react-native-vector-icons/AntDesign'
import { View } from 'react-native-animatable';

export default function ButtonFloat({icon}) {
  return (
    <View style={styles.button}>
      <Feather name={icon} color={'#000'} size={25}/>
    </View>
  );
}

