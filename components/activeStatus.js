import React from 'react';
import {TouchableOpacity, View, Image, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const ActiveStatus = ({data, ...props}) => (
  <TouchableOpacity {...props}>
    <View
      style={{
        marginRight: width * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LinearGradient
        colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
        style={{
          height: height * 0.09,
          width: height * 0.09,
          borderRadius: height * 0.045,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: height * 0.084,
            width: height * 0.084,
            borderRadius: height * 0.042,
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
      </LinearGradient>
      <Text
        style={{
          fontSize: 12,
          marginTop: 5,
          fontWeight: 'bold',
          color: '#6e6e6e',
        }}>
        {data.name}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ActiveStatus;
