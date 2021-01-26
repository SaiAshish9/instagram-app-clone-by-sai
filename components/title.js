import React from 'react';
import styled from 'styled-components';
import {Dimensions} from "react-native"
const {height} = Dimensions.get('window');

const Text1 = styled.Text`
  font-size: ${height * 0.063}px;
  font-family: 'GrandHotel-Regular';
`;

const Title = (props) => {
  return <Text1 {...props}>Instagram</Text1>
};

export default Title;
