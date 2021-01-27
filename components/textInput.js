import React from 'react';
import {View, Dimensions} from 'react-native';
import styled from 'styled-components';

const {height} = Dimensions.get('window');

const TextInput = styled.TextInput`
  height: ${height * 0.08}px;
  background-color: #fafafa;
  margin-top: ${height * 0.02}px;
  border-radius: 4px;
`;

const Input = ({style,...props}) => {
  return (
    <View style={{...style}}>
      <TextInput
      selectTextOnFocus={false}
      showSoftInputFocus={false}
      autoCompleteType='off'
      {...props} style={{paddingHorizontal:12,color:'#8f9aa9'}} />
    </View>
  );
};

export default Input;
