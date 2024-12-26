import React from 'react';
import { FlatList, View} from 'react-native';
import { SafeAreaView} from 'react-native';
import styles from './style';

import Header from '../../component/header'
import CardUsuario from '../../component/cardUsuario';

const usuario = [
  
    {
      id: '1',
      nome: 'Roberto Carvalho',
      email: 'roberto@roberto.com'
    },
    {
      id: '2',
      nome: 'Maria Silva',
      email: 'maria@maria.com'
    },
    {
      id: '3',
      nome: 'João Almeida',
      email: 'joao@joao.com'
    },
    {
      id: '4',
      nome: 'Ana Oliveira',
      email: 'ana@ana.com'
    },
    {
      id: '5',
      nome: 'Pedro Santos',
      email: 'pedro@pedro.com'
    },
    {
      id: '6',
      nome: 'Carla Nunes',
      email: 'carla@carla.com'
    },
    {
      id: '7',
      nome: 'Lucas Pereira',
      email: 'lucas@lucas.com'
    },
    {
      id: '8',
      nome: 'Fernanda Costa',
      email: 'fernanda@fernanda.com'
    },
    {
      id: '9',
      nome: 'Ricardo Lima',
      email: 'ricardo@ricardo.com'
    },
    {
      id: '10',
      nome: 'Juliana Souza',
      email: 'juliana@juliana.com'
    }
  
];



export default function Usuario() {
  return (
      <SafeAreaView>
        <Header />
        <View>
          <FlatList
            data={usuario}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardUsuario {...item} />}
          />
        </View>
      </SafeAreaView>
  );
}

