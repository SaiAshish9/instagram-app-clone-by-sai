import {Dimensions, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import React from 'react';

const {height, width} = Dimensions.get('window');

export const Link = ({text, style, btn, ...props}) => {
  return btn ? (
    <TouchableOpacity
      {...props}
      style={[
        {
          height: height * 0.08,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        },
        {...style},
      ]}>
      <Link1>{text}</Link1>
    </TouchableOpacity>
  ) : (
    <View
      {...props}
      style={[
        {
          height: height * 0.08,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        },
        {...style},
      ]}>
      <TouchableOpacity>
        <Link1>{text}</Link1>
      </TouchableOpacity>
    </View>
  );
};

export const Link1 = styled.Text`
  color: #0295f7;
  font-weight: bold;
`;

export const Label = styled.Text`
  color: #9d9d9d;
  text-align: center;
  font-weight: 600;
`;
