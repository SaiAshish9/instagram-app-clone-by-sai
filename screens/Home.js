import React from 'react';
import {View, Text, Dimensions, StatusBar} from 'react-native';
const {height, width} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={{height, width, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Text>home</Text>
    </View>
  );
};

export default Home;
