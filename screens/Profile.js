import React from 'react';
import {View, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const Profile = () => {
  return (
    <>
      <View style={{height, width, backgroundColor: '#fff'}}></View>
    </>
  );
};

export default Profile;
