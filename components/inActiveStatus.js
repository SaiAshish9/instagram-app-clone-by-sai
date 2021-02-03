import React from 'react';
import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('window');

const InActiveStatus = ({data, ...props}) => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.8}>
      <View
        style={{
          marginRight: width * 0.04,
          alignItems: 'center',
        }}>
        <View
          style={{
            borderWidth: 1.8,
            borderColor: '#dbdbdb',
            height: height * 0.09,
            width: height * 0.09,
            borderRadius: height * 0.045,
            padding: height * 0.018,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: data.url,
            }}
            style={{
              height: height * 0.076,
              width: height * 0.076,
              borderRadius: height * 0.038,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            fontWeight: 'bold',
            color: '#6e6e6e',
            opacity: 0.4,
          }}>
          {data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default InActiveStatus;
