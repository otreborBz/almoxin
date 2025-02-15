import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Alert, Keyboard, Text, View, Image } from 'react-native';
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
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  
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
    fetchTools();
  }, []);

  function fetchTools() {
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

        setListTools(tools);
        setTools(tools);
        setFilteredTools(tools);
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

  function handleSearch(text) {
    if (!text) {
      setFilteredTools(tools);
      return;
    }

    const searchTerm = text.toLowerCase().trim();
    
    const filtered = tools.filter(tool => {
      // Campos a serem pesquisados
      const searchableFields = [
        tool.name,
        tool.codigoCompra,
        tool.descricao,
        tool.maquina,
        tool.numeroFabricante,
        tool.localizacao
      ];

      // Verifica se algum campo contém o termo pesquisado
      return searchableFields.some(field => 
        field?.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredTools(filtered);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        placeHolder="peças"
        icon="addfile"
        user={userAuth || 'Carregando...'}
        onUpdate={fetchTools}
        onSearch={handleSearch}
      />
      <Text style={styles.countText}>
        {filteredTools.length} {filteredTools.length === 1 ? 'peça encontrada' : 'peças encontradas'}
      </Text>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          {listTools.length > 0 ? (
            <FlatList
              data={filteredTools}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CardTool {...item} role={role} />}
              style={styles.listContent}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Image 
                source={require('../../assets/empty.png')} 
                style={styles.emptyImage} 
              />
              <Text style={styles.emptyText}>
                Nenhuma ferramenta encontrada
              </Text>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}
