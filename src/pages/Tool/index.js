import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View, Text, Image } from 'react-native';
import styles from './style';

import Header from '../../component/header';
import CardTool from '../../component/cardTool';
import Loading from '../../component/loading';

import { searchTools, getAllTools } from '../../service/dataService';

export default function Tool() {
  const [isLoading, setIsLoading] = useState(true);
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);

  useEffect(() => {
    loadTools();
  }, []);

  function loadTools() {
    setIsLoading(true);
    try {
      const allTools = getAllTools();
      setTools(allTools);
      setFilteredTools(allTools);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(text) {
    if (!text) {
      setFilteredTools(tools);
      return;
    }

    const filtered = searchTools(text);
    setFilteredTools(filtered);
  }

  const renderItem = React.useCallback(({ item }) => (
    <CardTool data={item} />
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        placeHolder="peças"
        onSearch={handleSearch}
      />
      <Text style={styles.countText}>
        {filteredTools.length} {filteredTools.length === 1 ? 'peça encontrada' : 'peças encontradas'}
      </Text>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          {tools.length > 0 ? (
            <FlatList
              data={filteredTools}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              style={styles.listContent}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              maxToRenderPerBatch={15}
              windowSize={5}
              initialNumToRender={10}
              ListFooterComponent={<View style={{ height: 16 }} />}
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
