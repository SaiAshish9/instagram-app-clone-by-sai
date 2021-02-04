import React, {useState} from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import FeIcon from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import Suggestions from '../components/Profile';

const {height, width} = Dimensions.get('window');

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Profile = ({navigation}) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View
          style={{
            minHeight: height,
            width,
            backgroundColor: '#fff',
            paddingBottom: height * 0.1,
          }}>
          <View
            style={{
              padding: width * 0.04,
            }}>
            <Row>
              <Row>
                <FeIcon name="lock" size={24} />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginRight:3
                  }}>
                  {' '}
                  saiashish9
                </Text>
                <FeIcon name="chevron-down" size={18}/>
              </Row>
              <Row>
                <FeIcon name="plus" size={24} style={{marginRight: 10}} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.openDrawer();
                  }}>
                  <OIcon name="three-bars" size={24} />
                </TouchableOpacity>
              </Row>
            </Row>
            <Row
              style={{
                marginVertical: height * 0.04,
                marginBottom: height * 0.02,
              }}>
              <Image
                source={require('../assets/images/profile.png')}
                style={{
                  height: height * 0.12,
                  width: height * 0.12,
                  borderRadius: height * 0.06,
                }}
              />
              <Row style={{width: '60%'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>10</Text>
                  <Text style={{fontSize: 14}}>Posts</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>1446</Text>
                  <Text style={{fontSize: 14}}>Followers</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>100</Text>
                  <Text style={{fontSize: 14}}>Following</Text>
                </View>
              </Row>
            </Row>
            <Text style={{fontWeight: 'bold', color: '#272727'}}>
              Sai Ashish
            </Text>

            <View
              style={{
                marginVertical: height * 0.04,
                marginBottom: height * 0.02,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 7,
                borderColor: '#b7b7b7',
                borderWidth: 0.3,
                borderRadius: 3,
              }}>
              <Text style={{fontWeight: 'bold', color: '#2a2a2a'}}>
                Edit Profile
              </Text>
            </View>
          </View>

          <View style={{}}>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  setSelected(0);
                }}
                style={{
                  width: '50%',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomColor: '#000',
                    borderBottomWidth: selected === 0 ? 2 : 1,
                    opacity: selected === 0 ? 1 : 0.18,
                    padding: selected === 0 ? height * 0.015 : height * 0.016,
                  }}>
                  <Icon name="apps" size={27} color="#000" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setSelected(1);
                }}
                style={{
                  width: '50%',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomColor: '#000',
                    borderBottomWidth: selected === 1 ? 2 : 1,
                    opacity: selected === 1 ? 1 : 0.18,
                    padding: selected === 1 ? height * 0.015 : height * 0.016,
                  }}>
                  <AIcon name="picture" size={27} color="#000" />
                </View>
              </TouchableOpacity>
            </Row>
            {selected === 0 && (
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{marginVertical: height * 0.06}}
                  source={require('../assets/images/settings.png')}
                />
              </View>
            )}
            {selected === 1 && (
              <View>
                <Image
                  resizeMode="cover"
                  style={{height: height * 0.17, width: height * 0.17}}
                  source={{
                    uri:
                      'https://instagram.fdel36-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/143522227_1749877478517485_5805200288196327115_n.jpg?_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=9zYPzkTtyooAX9p6MT-&tp=1&oh=22922505536c7735d414cbc885b69d75&oe=6044A378',
                  }}
                />
              </View>
            )}
          </View>
          <View
            style={{
              padding: width * 0.04,
              paddingVertical: selected === 0 ? width * 0.01 : width * 0.05,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Complete your profile
            </Text>
            <Row style={{justifyContent: 'flex-start'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginRight: 5,
                  fontSize: 12,
                  color:"#9ccf83"
                }}>
                3 OF 4
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                  color:"#9b9b9b"
                }}>
                COMPLETE
              </Text>
            </Row>
            
          </View>
          <Suggestions />

        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
