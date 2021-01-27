import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const TextInput = styled.TextInput`
  height: ${height * 0.08}px;
  background-color: #fafafa;
  margin-top: ${height * 0.02}px;
  border-radius: 4px;
  width: 100%;
`;

const Input = ({style, ...props}) => {
  const [invisible, SetInVisible] = useState(true);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        ...style,
      }}>
      <TextInput
        selectTextOnFocus={false}
        showSoftInputFocus={false}
        autoCompleteType="off"
        importantForAutoFill="no"
        {...props}
        secureTextEntry={invisible && props.secureTextEntry}
        style={{paddingHorizontal: 12, color: '#8f9aa9'}}
      />
      {props.secureTextEntry && (
        <View
          style={{
            top: '2%',
            right: '50%',
          }}>
          <Icon
            onPress={() => SetInVisible(!invisible)}
            name={invisible ? 'eye-off-outline' : 'eye-outline'}
            color="#8f9aa9"
            size={24}
          />
        </View>
      )}
    </View>
  );
};

export default Input;
