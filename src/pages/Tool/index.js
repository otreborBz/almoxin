import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './style';

import Header from '../../component/header';
import CardTool from '../../component/cardTool';
import Loading from '../../component/loading';

import { auth, db } from '../../service/firebaseConnection';
import { collection, onSnapshot, doc, getDoc, query, where, getDocs } from 'firebase/firestore';

export default function Tool({ route }) {
  const { role } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [listTools, setListTools] = useState([]);
  const [userAuth, setUserAuth] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchUserAuth = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserAuth(userDoc.data().name);
          } else {
            console.warn('Usuário não encontrado no Firestore.');
          }
        } catch (error) {
          console.error('Erro ao buscar usuário autenticado:', error);
        }
      } else {
        setUserAuth('Usuário desconhecido');
      }
    };

    fetchUserAuth();
    fetchTools(); // Carrega as ferramentas ao montar o componente
  }, []);

  function fetchTools() {
    console.log('Atualizando lista de ferramentas...');
    setIsLoading(true);
    setIsSearching(false);

    const toolsRef = collection(db, 'tools');
    const unsubscribe = onSnapshot(
      toolsRef,
      (snapshot) => {
        const tools = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Ferramentas carregadas:', tools);
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
  }

  async function searchTools(searchText) {
    if (!searchText) {
      Alert.alert('Erro', 'Por favor, insira um termo para buscar.');
      return;
    }

    console.log('Pesquisando por:', searchText);
    setIsLoading(true);
    setIsSearching(true);

    try {
      const toolsCollection = collection(db, 'tools');

      const nameQuery = query(
        toolsCollection,
        where('name', '>=', searchText),
        where('name', '<=', searchText + '\uf8ff')
      );

      const descriptionQuery = query(
        toolsCollection,
        where('descricao', '>=', searchText),
        where('descricao', '<=', searchText + '\uf8ff')
      );

      const machineQuery = query(
        toolsCollection,
        where('maquina', '>=', searchText),
        where('maquina', '<=', searchText + '\uf8ff')
      );

      const [nameSnapshot, descriptionSnapshot, machineSnapshot] = await Promise.all([
        getDocs(nameQuery),
        getDocs(descriptionQuery),
        getDocs(machineQuery),
      ]);

      const results = [];

      nameSnapshot.forEach((doc) => results.push({ id: doc.id, ...doc.data() }));
      descriptionSnapshot.forEach((doc) => results.push({ id: doc.id, ...doc.data() }));
      machineSnapshot.forEach((doc) => results.push({ id: doc.id, ...doc.data() }));

      const uniqueResults = Array.from(new Set(results.map((item) => item.id))).map((id) =>
        results.find((item) => item.id === id)
      );

      if (uniqueResults.length > 0) {
        console.log('Resultados encontrados:', uniqueResults);
        setListTools(uniqueResults);
      } else {
        Alert.alert('Nenhum resultado encontrado', 'Nenhum item corresponde ao termo de busca.');
        setIsSearching(false);
      }
    } catch (error) {
      console.error('Erro na pesquisa:', error);
      Alert.alert('Erro', 'Não foi possível realizar a pesquisa.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        placeHolder="peças"
        icon="addfile"
        user={userAuth || 'Carregando...'}
        onUpdate={fetchTools}
        onSearch={searchTools}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={listTools}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardTool {...item} role={role} />}
          style={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}
