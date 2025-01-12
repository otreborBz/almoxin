import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './style';

import Header from '../../component/header';
import CardUser from '../../component/cardUser';
import Loading from '../../component/loading';

import { auth, db } from '../../service/firebaseConnection';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';

export default function UserTool() {
  const [isLoading, setIsLoading] = useState(true);
  const [listUsers, setListUsers] = useState([]);
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const fetchUserAuth = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserAuth(userData.name);
          } else {
            console.warn('Usuário não encontrado no Firestore.');
          }
        } catch (error) {
          console.error('Erro ao buscar usuário autenticado:', error);
          Alert.alert('Erro', 'Não foi possível carregar o usuário autenticado.');
        }
      } else {
        console.warn('Nenhum usuário autenticado.');
        setUserAuth('Usuário desconhecido');
      }
    };

    fetchUserAuth();

    const userRef = collection(db, 'users');
    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListUsers(users);
        setIsLoading(false);
      },
      (err) => {
        console.error('Erro ao carregar usuários:', err);
        Alert.alert('Erro', 'Não foi possível carregar a lista de usuários.');
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        placeHolder="usuário"
        icon="adduser"
        user={userAuth || 'Carregando...'}
      />
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
