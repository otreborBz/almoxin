import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from './style';

import Header from '../../component/header'
import CardTool from '../../component/cardTool';

import data from '../../service/tool'


export default function Tool() {
  return (
    <SafeAreaView style={styles.container}>
      <Header placeHolder="peças" icon="addfile" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardTool {...item} />}
        style={styles.listContent}
      />
    </SafeAreaView>
  );
}

