import React from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({data}) => {
  return (
    <View
      style={{
        width: width * 0.33,
        height: width * 0.35,
        backgroundColor: '#efefef',
        marginTop: width * 0.006,
        marginRight: width * 0.006,
      }}>
      {data && (
        <Image
          source={{uri: data.url}}
          style={{width: '100%', height: '100%'}}
        />
      )}
      {data && data.is_video === 1 && (
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
      {data && data.is_gallery === 1 && (
        <MIcon
          name="collections"
          color="#fff"
          size={21}
          style={{
            position: 'absolute',
            right: 5,
            top: 1,
          }}
        />
      )}
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const Grid3 = ({data, count, hide}) => {
  return (
    <View>
      <Row>
        {data
          ? data.slice(count, count + 3).map((i, k) => (
              <TouchableOpacity activeOpacity={data == null ? 1 : 0.8} key={k}>
                <Card data={i} />
              </TouchableOpacity>
            ))
          : [1, 2, 3].map((i, k) => (
              <TouchableOpacity activeOpacity={data == null ? 1 : 0.8} key={k}>
                <Card />
              </TouchableOpacity>
            ))}
      </Row>
      {!hide && (
        <Row
          style={{
            marginBottom: width * 0.006,
          }}>
          {data
            ? data.slice(count + 3, count + 6).map((i, k) => (
                <TouchableOpacity
                  activeOpacity={data == null ? 1 : 0.8}
                  key={k}>
                  <Card data={i} />
                </TouchableOpacity>
              ))
            : [1, 2, 3].map((i, k) => (
                <TouchableOpacity
                  activeOpacity={data == null ? 1 : 0.8}
                  key={k}>
                  <Card />
                </TouchableOpacity>
              ))}
        </Row>
      )}
    </View>
  );
};

export default Grid3;
