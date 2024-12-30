import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styles from './style';

import Header from '../../component/header';
import CardUser from '../../component/cardUser';
import Loading from '../../component/loading';

import { auth, db } from '../../service/firebaseConnection';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

export default function User() {

  const [isLoading, setIsLoading] = useState(true); 
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    async function getDados() {
      const userRef = collection(db, 'users');

      const unsubscribe = onSnapshot(userRef, (snapshot) => {
        const users = [];
        snapshot.forEach((doc) => {
          users.push({
            id: doc.id,
            email: doc.data().email,
            senha: doc.data().senha,
            nome: doc.data().nome
          });
        });
        setListUsers(users);  
        setIsLoading(false);   
      }, (err) => {
        console.log(err); 
        setIsLoading(false);
      });

  
      return () => unsubscribe();
    }

    getDados();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header placeHolder="usuario" icon="adduser" user={auth.currentUser.email} />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={listUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardUser {...item} />}
          style={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}
