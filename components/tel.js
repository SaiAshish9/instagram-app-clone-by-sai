import React, {useState, useRef} from 'react';
import {View, Dimensions, Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const TextInput = styled.TextInput`
  height: ${height * 0.08}px;
  background-color: #fafafa;
  margin-top: ${height * 0.02}px;
  border-radius: 4px;
  width: 100%;
  border-color: #dbdbdb;
  border-width: 1px;
`;

const Input = ({style,text='',setText,...props}) => {

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        ...style,
      }}>
      <View
        style={{
          top: '45%',
          left: '3%',
          position: 'absolute',
          zIndex: 2,
        }}>
        <Text
          style={{
            color: '#999',
            fontWeight: 'bold',
            borderRightColor: 'rgba(153,153,153,0.7)',
            borderRightWidth: 1,
            paddingRight: 3,
          }}>
          IN +91
        </Text>
      </View>
      <TextInput
        selectTextOnFocus={false}
        showSoftInputFocus={false}
        autoCompleteType="off"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        importantForAutoFill="no"
        {...props}
        value={text}
        onChangeText={(val) => {
           setText(val);
        }}
        style={{paddingHorizontal: 12, paddingLeft: 65, color: '#8f9aa9'}}
      />

      {text.length>0 && (
        <View
          style={{
            top: '2%',
            right: '50%',
          }}>
          <Icon
            onPress={() => setText('')}
            name={'close-outline'}
            color="#8f9aa9"
            size={24}
          />
        </View>
      )}
    </View>
  );
};

export default Input;
