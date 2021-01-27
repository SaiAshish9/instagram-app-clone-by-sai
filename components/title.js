import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const {height} = Dimensions.get('window');

const Text1 = styled.Text`
  font-size: ${height * 0.063}px;
  font-family: 'GrandHotel-Regular';
`;

const Title = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Text1
      onPress={() => {
        if (route.name != 'auth') navigation.replace('auth');
      }}
      {...props}>
      Instagram
    </Text1>
  );
};

export default Title;
