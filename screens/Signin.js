import React from 'react'
import {View, Text,Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => (
    <View style={{height,width,backgroundColor:"#fff"}}>
    <Text>SignIn</Text>
    </View>
  );
  

export default SignIn
