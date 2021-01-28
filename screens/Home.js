import React from 'react';
import {View, Dimensions} from 'react-native';
import Header from '../components/header';
import ScrollView from "../components/ScrollView"

const {height, width} = Dimensions.get('window');


const Home = () => {
  return (
    <View style={{height, width, backgroundColor: '#fff'}}>
      <Header />
      <ScrollView/>
    </View>
  );
};

export default Home;
