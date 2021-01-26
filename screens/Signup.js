import React from 'react'
import {View, Text,Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const SignUp = ({navigation}) => (
    <View style={{height,width,backgroundColor:"#fff"}}>
    <Text>SignUp</Text>
    </View>
  );
  

export default SignUp
