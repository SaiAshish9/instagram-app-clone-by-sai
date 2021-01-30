import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../components/direct/header';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import {Context} from '../api/contexts';

const {height, width} = Dimensions.get('window');

const Tabs = ({selected, setSelected}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          setSelected(0);
        }}>
        <View
          style={{
            width: width * 0.5,
            paddingVertical: height * 0.02,
            alignItems: 'center',
            borderBottomColor: selected === 0 ? '#262626' : '#b9b9b9',
            borderBottomWidth: selected === 0 ? 2 : 0.5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: selected === 0 ? '#262626' : '#b9b9b9',
            }}>
            Chats
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected(1);
        }}>
        <View
          style={{
            width: width * 0.5,
            paddingVertical: height * 0.02,
            alignItems: 'center',
            alignItems: 'center',
            borderBottomColor: selected === 1 ? '#262626' : '#b9b9b9',
            borderBottomWidth: selected === 1 ? 2 : 0.5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',

              color: selected === 1 ? '#262626' : '#b9b9b9',
            }}>
            Rooms
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Direct = ({navigation}) => {
  const {
    state: {statusList},
    fetchStatusList,
  } = useContext(Context);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetchStatusList();
  }, []);
  return (
    <View
      style={{
        height,
        width,
      }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        onPressBack={() => {
          navigation.closeDrawer();
        }}
      />
      <Tabs selected={selected} setSelected={setSelected} />

      {selected === 0 && (
        <ScrollView>
          <View
            style={{
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.04,
              marginBottom: height * 0.05,
            }}>
            <View
              style={{
                backgroundColor: '#efefef',
                height: height * 0.055,
                borderRadius: 10,
                alignItems: 'center',
                paddingHorizontal: '4%',
                flexDirection: 'row',
                marginBottom: height * 0.02,
              }}>
              <Icon name="search-outline" size={18} color="#b9b9b9" />
              <Text style={{marginLeft: 10, color: '#b9b9b9', fontSize: 16}}>
                Search
              </Text>
            </View>
            <View>
              {statusList &&
                statusList.map((i, k) => (
                  <View
                    key={k}
                    style={{
                      marginBottom: height * 0.027,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Image
                        style={{
                          height: height * 0.08,
                          width: height * 0.08,
                          borderRadius: height * 0.04,
                          marginRight: 18,
                        }}
                        source={{uri: i.url}}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 13,
                            marginTop: 5,
                            fontWeight: 'bold',
                            color: '#6e6e6e',
                          }}>
                          {i.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            marginTop: 5,
                            color: '#999',
                          }}>
                          {i.msg}
                        </Text>
                      </View>
                    </View>

                    <FIcon name="camera" size={24} color="#999" />
                  </View>
                ))}
            </View>
          </View>
        </ScrollView>
      )}

      {selected == 1 && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: height * 0.09,
          }}>
          <Image source={require('../assets/images/video.png')} />
        </View>
      )}

      <View
        style={{
          height: height * 0.07,
          position: 'absolute',
          bottom: 0,
          zIndex: 2,
          display: 'flex',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width,
            }}>
            <Icon color="#0f8fe3" name="camera" size={27} />
            <Text
              style={{
                fontWeight: 'bold',
                color: '#0f8fe3',
                marginLeft: 10,
              }}>
              Camera
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Direct;
