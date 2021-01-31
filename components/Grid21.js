import React from 'react';
import {View, Dimensions} from 'react-native';
import styled from 'styled-components';

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const {height, width} = Dimensions.get('window');

const Grid21 = () => {
  return (
    <Row >
      <View
        style={{
          width: width * 0.668,
          height: width * 0.706,
          backgroundColor: '#efefef',
        }}></View>
      <View>
        <View
          style={{
            width: width * 0.338,
            height: width * 0.35,
            backgroundColor: '#efefef',
            marginLeft: width * 0.006,
          }}></View>
        <View
          style={{
            width: width * 0.33,
            height: width * 0.35,
            backgroundColor: '#efefef',
            marginTop: width * 0.006,
            marginLeft: width * 0.006,
          }}></View>
      </View>
    </Row>
  );
};

export default Grid21;
