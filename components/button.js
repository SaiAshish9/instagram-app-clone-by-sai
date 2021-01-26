import React from 'react';
import {Text,Dimensions} from 'react-native';
import styled from 'styled-components';

const {height} = Dimensions.get('window')

const TouchableOpacity = styled.TouchableOpacity`
  height:${height*0.08}px;
  width:100%;
  background:#0295f7;
  align-items:center;
  justify-content:center;
  border-radius:4px;
`


const Btn = ({text,style,...props}) => {
  return (
      <TouchableOpacity {...props}
      style={{...style}}
      activeOpacity={0.8}
      >
        <Text style={{color:"#fff",fontWeight:"bold"}}>{text}</Text>
      </TouchableOpacity>
  )
};

export default Btn;
