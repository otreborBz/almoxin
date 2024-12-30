import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styles from './style';

import Header from '../../component/header'
import CardTool from '../../component/cardTool';
import Loading from '../../component/loading';

import data from '../../service/tool'
import { auth } from '../../service/firebaseConnection';


export default function Tool() {

  const [isLoading, setIsloading] = useState(false);
  const user = auth.currentUser.email
  

  return (
    <SafeAreaView style={styles.container}>
      <Header placeHolder="peças" icon="addfile" user={user} />
      {isLoading ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardTool {...item} />}
          style={styles.listContent}
        />
      ):(
        <Loading/>
      )}
      
    </SafeAreaView>
  );
}

