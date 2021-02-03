import React, {useContext} from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import {Context} from '../api/contexts';

const {height, width} = Dimensions.get('window');

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const data = [
  {
    text: 'Update Messaging',
    icon: <Icon name="chatbubbles-outline" size={24} />,
  },
  {
    text: 'Follow and Invite Friends',
    icon: <Icon name="person-add-outline" size={24} />,
  },
  {
    text: 'Notifications',
    icon: <Icon name="notifications-outline" size={24} />,
  },
  {
    text: 'Privacy',
    icon: <Icon name="lock-closed-outline" size={24} />,
  },
  {
    text: 'Security',
    icon: <MIcon name="security" size={24} />,
  },
  {
    text: 'Ads',
    icon: <AIcon name="notification" size={24} />,
  },
  {
    text: 'Account',
    icon: <Icon name="person-outline" size={24} />,
  },
  {
    text: 'Help',
    icon: <FIcon name="help-circle" size={24} />,
  },
  {
    text: 'About',
    icon: <AIcon name="infocirlceo" size={24} />,
  },
  {
    text: 'Theme',
    icon: <Icon name="color-palette-outline" size={24} />,
  },
];

const Settings = ({navigation}) => {
  const {signOut} = useContext(Context);
  return (
    <ScrollView>
      <View
        style={{
          padding: width * 0.06,
          minHeight: height,
          width,
          backgroundColor: '#fff',
        }}>
        <Row style={{marginBottom: height * 0.02}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back-outline" size={27} />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', marginLeft: 18, fontSize: 18}}>
            Settings
          </Text>
        </Row>
        <View
          style={{
            backgroundColor: '#efefef',
            height: height * 0.05,
            borderRadius: 10,
            alignItems: 'center',
            paddingHorizontal: '4%',
            paddingVertical: 10,
            width: '100%',
            flexDirection: 'row',
            marginBottom: height * 0.04,
            marginVertical: height * 0.02,
          }}>
          <Icon name="search-outline" size={18} color="#999" />
          <Text style={{marginLeft: 10, color: '#b9b9b9', fontSize: 16}}>
            Search
          </Text>
        </View>
        {data.map((i, k) => (
          <TouchableOpacity key={k}>
            <Row style={{marginBottom: height * 0.04}}>
              {i.icon}
              <Text style={{fontSize: 16, color: '#646464', marginLeft: 10}}>
                {i.text}
              </Text>
            </Row>
          </TouchableOpacity>
        ))}
        <Image style={{right: 6}} source={require('../assets/images/fb.png')} />

        <Text
          style={{
            marginVertical: height * 0.02,
            color: 'rgb(2,149,247)',
            fontSize: 15,
          }}>
          Acconts Center
        </Text>
        <View>
          <Text style={{color: '#999'}}>
            Control settings for connected experiences across
          </Text>
          <Text style={{color: '#999'}}>
            Instagram, the Facebook app and Messenger,
          </Text>
          <Text style={{color: '#999'}}>
            including story and post sharing and logging in.
          </Text>
        </View>
        <Text style={{fontWeight: 'bold', marginBottom: height * 0.02}}>
          Logins
        </Text>
        <Text
          style={{
            marginBottom: height * 0.02,
            color: 'rgb(2,149,247)',
            fontSize: 15,
          }}>
          Add Account
        </Text>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}>
          <Text
            style={{
              marginVertical: height * 0.02,
              color: 'rgb(2,149,247)',
              fontSize: 15,
            }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settings;
