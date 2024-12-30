import React from 'react';
import Feather from 'react-native-vector-icons/AntDesign'

export default function IconFeather({icon}) {
  return (
      <Feather name={icon} color={'#000'} size={25}/>
  );
}

