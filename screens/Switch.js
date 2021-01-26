import React from 'react';
import {View, Text,Dimensions} from 'react-native';
import styled from "styled-components"

const {height, width} = Dimensions.get('window');


const Switch = ({navigation}) => (
  <View style={{height,width,backgroundColor:"#fff",alignItems:"center"}}>
    <Text>Switch</Text>
  </View>
);

export default Switch;
