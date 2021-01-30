import React from 'react';
import {View, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

const Text = styled.Text`
  font-family: 'GrandHotel-Regular';
  font-size: ${height * 0.045}px;
  text-align: center;
`;

const Header = ({show}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        borderBottomColor:show?'#dbdbdb':'#fff',
        borderBottomWidth:0.7
      }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TouchableOpacity>
        <FIcon name="plus-square-o" size={27} />
      </TouchableOpacity>
      <Text>Instagram</Text>
      <TouchableOpacity>
        <Icon name="send" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
