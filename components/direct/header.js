import React from 'react';
import {View, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SafeAreaView from 'react-native-safe-area-view';

const {height, width} = Dimensions.get('window');

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${height * 0.027}px;
  font-weight: bold;
  text-align: center;
`;

const Header = ({show, onPressBack}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.04,
          paddingVertical: height * 0.02,
          borderBottomColor: show ? '#dbdbdb' : '#fff',
          borderBottomWidth: 0.7,
        }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Row>
          <TouchableOpacity onPress={onPressBack}>
            <IonIcon color="#262626" name="arrow-back" size={27} />
          </TouchableOpacity>
          <Text style={{marginLeft: 10, color: '#262626'}}>Direct</Text>
        </Row>
        <Row>
          <TouchableOpacity>
            <IonIcon name="ios-videocam-outline" size={27} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Icon name="pencil-square-o" size={24} />
          </TouchableOpacity>
        </Row>
      </View>
    </SafeAreaView>
  );
};

export default Header;
