import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './style';

import Header from '../../component/header';
import CardTool from '../../component/cardTool';
import Loading from '../../component/loading';

import { auth, db } from '../../service/firebaseConnection';
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';

export default function Tool({ route }) {
  const { role } = route.params;
  const { searchResults } = route.params;

  console.log('tool:', role);

  const [isLoading, setIsLoading] = useState(true);
  const [listTools, setListTools] = useState([]);
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const userAuth = async () => {
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
        }
      } else {
        console.warn('Nenhum usuário autenticado.');
        setUserAuth('Usuário desconhecido');
      }
    };

    const fetchTools = () => {
      const toolsRef = collection(db, 'tools');
      const unsubscribe = onSnapshot(
        toolsRef,
        (snapshot) => {
          const tools = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setListTools(tools);
          setIsLoading(false);
        },
        (error) => {
          console.error('Erro ao carregar ferramentas:', error);
          Alert.alert('Erro', 'Não foi possível carregar a lista de ferramentas.');
          setIsLoading(false);
        }
      );
      return unsubscribe;
    };

    userAuth();
    const unsubscribeTools = fetchTools();

    return () => unsubscribeTools();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        placeHolder="peças"
        icon="addfile"
        user={userAuth || 'Carregando...'}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={searchResults || listTools}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardTool {...item} role={role} />}
          style={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}
