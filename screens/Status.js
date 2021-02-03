import React, {useRef, useEffect, useState} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import FocusAwareStatusBar from '../components/FocusStatusBar';
import FeIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// https://instagram.fdel36-1.fna.fbcdn.net/v/t50.2886-16/142390566_1012025595986594_5782131199456884120_n.mp4?_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=nhLdDuGIaYcAX_pCSGg&oe=601AB213&oh=d9158dfa3f999c156e635181ce72c10a

const {width, height} = Dimensions.get('window');

const Row = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Status = ({route, navigation}) => {
  const video = useRef();
  const [pause, setPause] = useState(false);
  const [totalLength, setTotalLength] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const blur = navigation.addListener('blur', () => {
      setPause(true);
      if (video) {
        video.current.seek(0);
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
      <LinearGradient
        colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
        style={{
          height,
          width,
          backgroundColor: '#000',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: height * 0.02,
        }}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '88%',
              height: 2.5,
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: 5,
              marginBottom: 10,
            }}>
            <View
              style={{
                borderRadius: 5,
                width: `${(duration * 100) / totalLength}%`,
                height: '100%',
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View
            style={{
              width: '88%',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="cover"
                style={{
                  height: height * 0.05,
                  width: height * 0.05,
                  borderRadius: height * 0.025,
                  marginRight: 10,
                }}
                source={{
                  uri: route.params.data.url,
                }}
              />
              <Text
                style={{
                  color: '#fae6fe',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                {route.params.data.name}
              </Text>
              <Text
                style={{
                  color: '#fae6fe',
                  fontSize: 12,
                  marginLeft:7,
                }}>
                5h
              </Text>
            </View>

            <Icon color="#fff" name="ellipsis-vertical" size={19} />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Video
            controls={false}
            ref={video}
            volume={0}
            // repeat
            paused={pause}
            playInBackground={false}
            onEnd={() => {
              navigation.goBack();
            }}
            onProgress={(data) => {
              setDuration(Math.floor(data.currentTime));
            }}
            onLoad={(data) => {
              setTotalLength(Math.floor(data.duration));
            }}
            resizeMode="cover"
            style={{
              height: height * 0.5,
              width: width * 0.8,
              borderRadius: 7,
            }}
            source={{
              uri:
                'https://instagram.fdel36-1.fna.fbcdn.net/v/t50.2886-16/80859720_189443308774635_20476835760227540_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=CzOOLgJAubgAX9BzmNo&vs=17854786957709109_2294021830&_nc_vs=HBksFQAYJEdFalMwUVRyNUI4MVRLd0FBTlRFbk5tU3YwZ0Fia1lMQUFBRhUAAsgBABUAGCRHQ1Y1MGdRRjJJSHVGTDRBQUpZZUJJM3JtYlpiYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbqydyIsbW3PxUCKAJDMywXQCuZmZmZmZoYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=cc3a09aba1&oe=601AD3E7&oh=1827e28458557382027960d786a95907',
            }}
          />
        </View>

        <Text style={{fontSize: 24}}>😘</Text>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: width * 0.06,
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '88%',
              height: height * 0.076,
              borderColor: '#fff',
              borderWidth: 1,
              borderRadius: 30,
              justifyContent: 'center',
              paddingLeft: 18,
            }}>
            <Text style={{color: '#fff', fontSize: 14.5}}>Search</Text>
          </View>
          <TouchableOpacity>
            <FeIcon color="#fff" name="send" size={27} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Status;
