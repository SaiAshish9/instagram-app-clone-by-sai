import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import styled from 'styled-components';
import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const data = [
  {
    text: 'Archive',
    icon: <FIcon name="clock" size={24} />,
  },
  {
    text: 'Your Activity',
    icon: <MIcon name="progress-clock" size={24} />,
  },
  {
    text: 'QR Code',
    icon: <MIcon name="qrcode" size={24} />,
  },
  {
    text: 'Saved',
    icon: <FIcon name="bookmark" size={24} />,
  },
  {
    text: 'Close Friends',
    icon: <AIcon name="bars" size={24} />,
  },
  {
    text: 'Discover People',
    icon: <Icon name="person-add-outline" size={24} />,
  },
  {
    text: 'Update Messaging',
    icon: <AIcon name="message1" size={24} />,
  },
  {
    text: 'Settings',
    icon: <AIcon name="setting" size={24} />,
  },
];

const SideNav = ({navigation}) => (
  <View
    style={{
      height,
      borderLeftColor: '#b7b7b7',
      borderStartWidth: 0.3,
      width: width * 0.6,
      backgroundColor: '#fff',
      paddingVertical: width * 0.06,
    }}>
    <Text
      style={{
        fontSize: 16,
        paddingHorizontal: width * 0.04,
        paddingBottom: width * 0.04,
        fontWeight: 'bold',
        borderBottomColor: '#999',
        borderBottomWidth: 0.3,
      }}>
      saiashish9
    </Text>
    <View style={{padding: width * 0.04}}>
      {data.map((i, k) => (
        <TouchableOpacity
          key={k}
          onPress={() => {
            if (k == data.length - 1) {
              navigation.navigate('Settings');
            }
          }}>
          <Row style={{marginBottom: height * 0.04}}>
            {i.icon}
            <Text style={{fontSize: 16, color: '#646464', marginLeft: 10}}>
              {i.text}
            </Text>
          </Row>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default SideNav;
