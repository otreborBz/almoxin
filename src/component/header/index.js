import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Logo from '../Logo';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../color';

export default function Header({ placeHolder, onSearch }) {
  const [textSearch, setTextSearch] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    onSearch(textSearch);
  };

  const emptyInput = () => {
    setTextSearch('');
    onSearch('');
  };

  const handleAddItem = () => {
    navigation.navigate('AddItem');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <View style={styles.logoContainer}>
          <Logo size="small" />
          <Text style={styles.welcome}>
            Almoxarifado <Text style={styles.companyName}>• Code BR</Text>
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddItem}
        >
          <Feather name="plus" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder={`Buscar ${placeHolder}...`}
            placeholderTextColor={colors.textSecondary}
            value={textSearch}
            onChangeText={(text) => setTextSearch(text)}
          />
          <TouchableOpacity 
            onPress={handleSearch}
            style={styles.searchButton}
          >
            <Feather name="search" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={emptyInput}
        >
          <Feather name="refresh-ccw" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
