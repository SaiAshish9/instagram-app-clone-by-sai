import React from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const {height, width} = Dimensions.get('window');

const Grid12 = () => {
  return (
    <Row>
      <View>
        <TouchableOpacity>
          <View
            style={{
              width: width * 0.33,
              height: width * 0.35,
              backgroundColor: '#efefef',
              marginRight: width * 0.006,
            }}>
            <Icon
              name="caret-right"
              color="#fff"
              size={32}
              style={{
                position: 'absolute',
                right: 5,
                top: 1,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              width: width * 0.33,
              height: width * 0.35,
              backgroundColor: '#efefef',
              marginTop: width * 0.006,
              marginRight: width * 0.006,
            }}></View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View
          style={{
            width: width * 0.67,
            height: width * 0.706,
            backgroundColor: '#efefef',
          }}></View>
      </TouchableOpacity>
    </Row>
  );
};

export default Grid12;
