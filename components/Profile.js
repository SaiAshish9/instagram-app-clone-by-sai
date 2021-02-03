import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/EvilIcons';
import FIcon from 'react-native-vector-icons/Feather';

const {height, width} = Dimensions.get('window');

const Btn = styled.TouchableOpacity`
  padding: 6px 16px;
  margin-top: ${height * 0.03}px;
  margin-bottom: ${height * 0.016}px;
  border-radius: 5px;
  background-color: #0295f7;
  align-items: center;
  justify-content: center;
`;

const OutlinedBtn = styled.TouchableOpacity`
  padding: 5px 13px;
  border-radius: 5px;
  margin-top: ${height * 0.03}px;
  margin-bottom: ${height * 0.016}px;
  border: 2px solid #eee;
  align-items: center;
  justify-content: center;
`;

const data = [
  {
    title: 'Add Your Name',
    desc1: 'Add your full name so your',
    desc2: "friends know it's you",
    btnText: 'Edit Name',
    icon: <FIcon name="user" color="#000" size={27} />,
  },
  {
    title: 'Add Profile Photo',
    desc1: 'Choose a profile photo to',
    desc2: "represent yourself on Instagram.",
    btnText: 'Change Photo',
    icon: <FIcon name="users" color="#000" size={27} />,
  },
  {
    title: 'Find People to Follow',
    desc1: 'Follow people and interests you',
    desc2: "care about.",
    btnText: 'Find More',
    icon: <EIcon name="user" color="#000" size={32} />,
  },
];

const Profile = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: width * 0.04,
        paddingHorizontal: 0,
        marginVertical: height * 0.02,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            borderColor: '#b7b7b7',
            borderWidth: 0.28,
            marginRight: 10,
            borderRadius: 5,
            alignItems: 'center',
            padding: width * 0.03,
          }}>
          <View
            style={{
              height: height * 0.08,
              width: height * 0.08,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#b7b7b7',
              opacity: 0.6,
              borderWidth: 1,
              marginVertical: height * 0.02,
              marginBottom: height * 0.015,
            }}>
            <EIcon name="comment" color="#b7b7b7" size={32} />
          </View>

          <Text style={{marginTop: 5, fontWeight: 'bold', color: '#444444'}}>
            Add Bio
          </Text>
          <Text style={{fontSize: 12, color: '#989898'}}>
            Tell your followers a little bit
          </Text>
          <Text style={{fontSize: 12, color: '#989898'}}>about yourself</Text>
          <Btn activeOpacity={0.6}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Add Bio</Text>
          </Btn>
        </View>

        {data.map((i, k) => (
          <View
            key={k}
            style={{
              borderColor: '#b7b7b7',
              borderWidth: 0.28,
              marginRight: 10,
              borderRadius: 5,
              alignItems: 'center',
              padding: width * 0.03,
            }}>
            <View
              style={{
                height: height * 0.08,
                width: height * 0.08,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#000',
                borderWidth: 1,
                marginVertical: height * 0.02,
                marginBottom: height * 0.015,
                zIndex:1
              }}>
              {i.icon}
            </View>
            <Icon
              name="checkcircle"
              size={21}
              color="#5bc323"
              style={{position: 'absolute', top: 62, zIndex: 3, right: 46.5}}
            />
            <Text style={{marginTop: 5, fontWeight: 'bold', color: '#444444'}}>
              {i.title}
            </Text>
            <Text style={{fontSize: 12, color: '#989898'}}>{i.desc1}</Text>
            <Text style={{fontSize: 12, color: '#989898'}}>{i.desc2}</Text>
            <OutlinedBtn activeOpacity={0.6}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>
                {i.btnText}
              </Text>
            </OutlinedBtn>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;
