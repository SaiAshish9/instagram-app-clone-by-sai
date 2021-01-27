import React from 'react';
import {Text, Dimensions, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const {height} = Dimensions.get('window');

const TouchableOpacity = styled.TouchableOpacity`
  height: ${height * 0.08}px;
  width: 100%;
  background: ${(props) =>
    props.disabled ? 'rgba(2,149,247,0.4)' : 'rgb(2,149,247)'};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-direction: row;
`;

const Btn = ({text, style, logoFB, ...props}) => {
  return (
    <TouchableOpacity {...props} style={{...style}} activeOpacity={0.8}>
      {logoFB && (
        <View
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginRight: 5,
            overflow: 'hidden',
            borderColor: '#fff',
            backgroundColor: '#fff',
          }}>
          <Icon name="facebook" size={15} color="#0295f7" />
        </View>
      )}
      <Text style={{color: '#fff', fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
