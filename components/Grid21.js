import React from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const {height, width} = Dimensions.get('window');

const Grid21 = ({data, count}) => {
  return (
    <Row>
      <TouchableOpacity activeOpacity={data == null ? 1 : 0.8}>
        <View
          style={{
            width: width * 0.668,
            height: width * 0.706,
            backgroundColor: '#efefef',
          }}>
          {data && (
            <Image
              source={{uri: data[count].url}}
              style={{width: '100%', height: '100%'}}
            />
          )}
          {data && data[count].is_video === 1 && (
            <Icon
              name="caret-right"
              color="#fff"
              size={32}
              style={{
                position: 'absolute',
                right: 10,
                top: 1,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity activeOpacity={data == null ? 1 : 0.8}>
          <View
            style={{
              width: width * 0.338,
              height: width * 0.35,
              backgroundColor: '#efefef',
              marginLeft: width * 0.006,
            }}>
            {data && (
              <Image
                source={{uri: data[count + 1].url}}
                style={{width: '100%', height: '100%'}}
              />
            )}
            {data && data[count + 1].is_video === 1 && (
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
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={data == null ? 1 : 0.8}>
          <View
            style={{
              width: width * 0.33,
              height: width * 0.35,
              backgroundColor: '#efefef',
              marginTop: width * 0.006,
              marginLeft: width * 0.006,
            }}>
            {data && (
              <Image
                source={{uri: data[count + 2].url}}
                style={{width: '100%', height: '100%'}}
              />
            )}
            {data && data[count + 2].is_video === 1 && (
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
            )}
          </View>
        </TouchableOpacity>
      </View>
    </Row>
  );
};

export default Grid21;
