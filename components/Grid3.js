import React from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Card = () => {
  return (
    <View
      style={{
        width: width * 0.33,
        height: width * 0.35,
        backgroundColor: '#efefef',
        marginTop: width * 0.006,
        marginRight: width * 0.006,
      }}></View>
  );
};

const {height, width} = Dimensions.get('window');

const Grid3 = () => {
  const x = [...Array(6).keys()];

  return (
    <View>
      <Row>
        {x.slice(0, 3).map((i, k) => (
          <TouchableOpacity key={k}>
            <Card />
          </TouchableOpacity>
        ))}
      </Row>
      <Row
        style={{
          marginBottom: width * 0.006,
        }}>
        {x.slice(3, 6).map((i, k) => (
          <TouchableOpacity key={k}>
            <Card />
          </TouchableOpacity>
        ))}
      </Row>
    </View>
  );
};

export default Grid3;
