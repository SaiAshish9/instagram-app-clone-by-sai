import React from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import styled from 'styled-components';

const {height, width} = Dimensions.get('window');

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Activity = () => {
  return (
    <>
      <View
        style={{
          height,
          padding: width * 0.04,
          paddingVertical: height * 0.04,
          width,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 21,
            color: '#272727',
          }}>
          Activity
        </Text>

        <Row
          style={{justifyContent: 'flex-start', marginVertical: height * 0.02}}>
          <Image
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png',
            }}
            style={{
              height: height * 0.08,
              width: height * 0.08,
              borderRadius: height * 0.04,
              marginRight: 10,
            }}
          />
          

          <View
            style={{
              backgroundColor: '#ed4a54',
              height: 18,
              width: 18,
              borderRadius: 9,
              alignItems: 'center',
              position:"absolute",
              top:0,
              left:height*0.06,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 10,
                fontWeight:"bold"
              }}>
              1
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: '#353535',
              }}>
              Follow Requests
            </Text>
            <Text
              style={{
                color: '#bebebe',
              }}>
              Approve or ignore requests
            </Text>
          </View>
        </Row>
        <Text>Today</Text>
      </View>
    </>
  );
};

export default Activity;
