import React, {useEffect,useContext} from 'react';
import {View, Dimensions, Text, Image, ScrollView} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {Context} from '../api/contexts';

const {height, width} = Dimensions.get('window');

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Btn = styled.TouchableOpacity`
  padding: 5px 13px;
  border-radius: 5px;
  background-color: rgb(2,149,247);
  align-items: center;
  justify-content: center;
`;

const OutlinedBtn = styled.TouchableOpacity`
  padding: 5px 13px;
  border-radius: 5px;
  border: 2px solid #eee;
  align-items: center;
  justify-content: center;
`;

const data = [
  {
    img:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    title: 'mayank',
    desc1: 'commented on a',
    desc2: "post you're tagged in 😂😂",
    dur: '3d',
    postImg:
      'https://instagram.fdel36-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/143522227_1749877478517485_5805200288196327115_n.jpg?_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=9zYPzkTtyooAX9p6MT-&tp=1&oh=22922505536c7735d414cbc885b69d75&oe=6044A378',
  },
  {
    img:
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'vivek',
    desc1: 'tagged you in a',
    desc2: 'post.',
    dur: '3d',
    postImg:
      'https://instagram.fdel36-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/143522227_1749877478517485_5805200288196327115_n.jpg?_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=9zYPzkTtyooAX9p6MT-&tp=1&oh=22922505536c7735d414cbc885b69d75&oe=6044A378',
  },
];

const Activity = () => {
  const {
    state: {suggestions},
    fetchSuggestions,
  } = useContext(Context);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          padding: width * 0.04,
          minHeight:height,
          paddingVertical: height * 0.04,
          width,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 21,
            color: '#272727',
          }}>
          Activity
        </Text>

        <Row
          style={{justifyContent: 'flex-start', marginVertical: height * 0.02}}>
          <Image
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png',
            }}
            style={{
              height: height * 0.08,
              width: height * 0.08,
              borderRadius: height * 0.04,
              marginRight: 10,
            }}
          />

          <View
            style={{
              backgroundColor: '#ed4a54',
              height: 18,
              width: 18,
              borderRadius: 9,
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: height * 0.06,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              1
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: '#353535',
              }}>
              Follow Requests
            </Text>
            <Text
              style={{
                color: '#bebebe',
              }}>
              Approve or ignore requests
            </Text>
          </View>
        </Row>
        <Text
          style={{
            color: '#474747',
            fontWeight: 'bold',
          }}>
          Today
        </Text>
        <Row style={{marginVertical: height * 0.015}}>
          <Row>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png',
              }}
              style={{
                height: height * 0.07,
                width: height * 0.07,
                borderRadius: height * 0.035,
                marginRight: 18,
              }}
            />
            <View style={{top: 8}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#333',
                }}>
                harshit
              </Text>
              <Text style={{color: '#797979'}}>requested to</Text>
              <Row>
                <Text style={{color: '#797979'}}>follow you.</Text>
                <Text style={{color: '#b7b7b7'}}> 23h</Text>
              </Row>
            </View>
          </Row>

          <Btn activeOpacity={0.8}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Confirm</Text>
          </Btn>
          <OutlinedBtn activeOpacity={0.8}>
            <Text style={{color: '#797979', fontWeight: 'bold'}}>Delete</Text>
          </OutlinedBtn>
        </Row>
        <Text
          style={{
            color: '#474747',
            fontWeight: 'bold',
            marginVertical: height * 0.02,
          }}>
          This Week
        </Text>
        {data.map((i, k) => (
          <Row key={k} style={{marginBottom: height * 0.03}}>
            <Row>
              <Image
                source={{
                  uri: i.img,
                }}
                style={{
                  height: height * 0.07,
                  width: height * 0.07,
                  borderRadius: height * 0.035,
                  marginRight: 18,
                }}
              />
              <View>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Text
                    style={{marginRight: 5, fontWeight: 'bold', color: '#333'}}>
                    {i.title}
                  </Text>
                  <Text style={{color: '#797979'}}>{i.desc1}</Text>
                </Row>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Text style={{marginRight: 10, color: '#797979'}}>
                    {i.desc2}
                  </Text>
                  <Text style={{color: '#b7b7b7'}}>{i.dur}</Text>
                </Row>
              </View>
            </Row>
            <Image
              source={{
                uri: i.postImg,
              }}
              style={{
                height: height * 0.07,
                width: height * 0.07,
              }}
            />
          </Row>
        ))}
        {suggestions && (
          <Text
            style={{
              color: '#474747',
              fontWeight: 'bold',
              marginBottom: height * 0.02,
            }}>
            Suggestions for you
          </Text>
        )}

        {suggestions &&
          suggestions.map((i, k) => (
            <Row key={k} style={{marginVertical: height * 0.015}}>
              <Row>
                <Image
                  source={{
                    uri: i.image,
                  }}
                  style={{
                    height: height * 0.08,
                    width: height * 0.08,
                    borderRadius: height * 0.04,
                  }}
                />
                <View style={{top: 1,width:"60%",right:32}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#333',
                    }}>
                    {i.title}
                  </Text>
                  <Text style={{color: '#b7b7b7'}}>{i.desc1}</Text>
                  <Text style={{color: '#b7b7b7'}}>{i.desc2}</Text>
                </View>
              </Row>
              <Row>
                <Btn activeOpacity={0.8}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Follow
                  </Text>
                </Btn>
                <Icon color="#9c9c9c" name="ellipsis-vertical" size={18} />
              </Row>
            </Row>
          ))}

        {suggestions && (
          <Text
            style={{
              color: 'rgb(2,149,247)',
              fontWeight: 'bold',
              marginVertical: height * 0.02,
            }}>
            See All Suggestions
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Activity;
