import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import FocusAwareStatusBar from '../components/FocusStatusBar';
import FIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const Row = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Media = ({navigation}) => {
  const video = useRef();
  const [pause, setPause] = useState(false);
  const [totalLength, setTotalLength] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const blur = navigation.addListener('blur', () => {
      setPause(true);
      if (video) {
        video.current.seek(0);
        // current.pauseVideo
      }
    });

    const focus = navigation.addListener('focus', () => {
      setPause(false);
    });

    return blur, focus;
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <FocusAwareStatusBar backgroundColor="#000" barStyle="light-content" />
      <View
        style={{
          height,
          width,
          backgroundColor: '#000',
          justifyContent: 'space-between',
          paddingBottom: height * 0.1,
        }}>
        <Row style={{padding: width * 0.04}}>
          <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>
            Reels
          </Text>
          <FIcon name="camera" size={24} color="#fff" />
        </Row>

        <Text
          style={{
            color: '#fff',
            fontSize: 27,
            textAlign: 'center',
            fontFamily: 'GrandHotel-Regular',
          }}>
          127-run second-wicket partnership
        </Text>
        {/*  */}
        <Video
          controls={false}
          ref={video}
          volume={0}
          paused={pause}
          playInBackground={false}
          repeat
          onProgress={(data) => {
            setDuration(Math.floor(data.currentTime));
          }}
          onLoad={(data) => {
            setTotalLength(Math.floor(data.duration));
          }}
          resizeMode="cover"
          style={{
            height: height * 0.45,
            width: width,
          }}
          source={{
            uri:
              'https://instagram.fdel36-1.fna.fbcdn.net/v/t50.2886-16/10000000_440314793671730_2596481608621930322_n.mp4?_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-qhnMQXfV-4AX8tj_Tm&oe=60194FA4&oh=706d548ffa14d4590591683723714cd2',
          }}
        />

        <View>
          <Row
            style={{
              paddingHorizontal: width * 0.04,
              justifyContent: 'flex-start',
            }}>
            <Image
              source={{
                uri:
                  'https://instagram.fdel36-1.fna.fbcdn.net/v/t51.2885-19/s150x150/141729424_409002170407575_6975449868639852950_n.jpg?_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_ohc=LxQqWOUKpFUAX8P--rw&tp=1&oh=fd2c53d8b804c0200917f10fb6d4d04a&oe=6040C07C',
              }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
              }}
            />
            <Text
              style={{
                color: '#fff',
                marginLeft: 10,
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              cricket_south_africa
            </Text>
            <TouchableOpacity>
              <Row>
                <EIcon name="dot-single" color="#fff" size={20} />
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  Follow
                </Text>
              </Row>
            </TouchableOpacity>
          </Row>

          <View
            style={{
              padding: width * 0.04,
              paddingVertical: width * 0.03,
            }}>
            <Text style={{color: '#999', fontSize: 12, fontWeight: 'bold'}}>
              ...more
            </Text>
          </View>
          <Row
            style={{
              paddingHorizontal: width * 0.04,
            }}>
            <Row>
              <TouchableOpacity
                onPress={() => {
                  console.log({
                    duration,
                    totalLength,
                  });
                }}>
                <AIcon color="#999" name="heart" size={21} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  style={{marginHorizontal: 10}}
                  name="chatbubble"
                  color="#999"
                  size={21}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FAIcon color="#999" name="send" size={21} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10}}>
                <Icon color="#999" name="ellipsis-vertical" size={24} />
              </TouchableOpacity>
            </Row>
            <Row style={{alignItems: 'flex-end'}}>
              <Row>
                <TouchableOpacity>
                  <AIcon color="#999" name="heart" size={12} />
                </TouchableOpacity>
                <Text style={{color: '#999', marginLeft: 5, fontSize: 12}}>
                  634
                </Text>
              </Row>

              <Row>
                <TouchableOpacity>
                  <Icon
                    style={{marginLeft: 10}}
                    name="chatbubble"
                    color="#999"
                    size={12}
                  />
                </TouchableOpacity>
                <Text style={{color: '#999', marginLeft: 5, fontSize: 12}}>
                  3
                </Text>
              </Row>
            </Row>
          </Row>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Media;
