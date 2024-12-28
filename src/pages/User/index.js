import React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity,Text} from 'react-native';
import styles from './style';

import Header from '../../component/header'
import CardUser from '../../component/cardUser';


import Data from '../../service/usuario'


export default function User() {
  return (
      <SafeAreaView style={styles.container}>
        <Header placeHolder="usuario" icon="adduser"/>
          <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardUser {...item} />}
            style={styles.listContent}
          />
      
      </SafeAreaView>
  );
}

 