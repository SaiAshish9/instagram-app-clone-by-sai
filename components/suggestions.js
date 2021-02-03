import React, {useContext, useEffect} from 'react';
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
import {Context} from '../api/contexts';

const {height, width} = Dimensions.get('window');

const Btn = styled.TouchableOpacity`
  padding: 6px 0;
  width: 100%;
  margin-top: ${height * 0.036}px;
  border-radius: 5px;
  background-color: #0295f7;
  align-items: center;
  justify-content: center;
`;

const Suggestions = () => {
  const {
    state: {suggestions},
    fetchSuggestions,
  } = useContext(Context);

  useEffect(() => {
    fetchSuggestions();
  }, []);

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
            marginLeft: width * 0.04,
          }}>
          <Image
            style={{
              height: height * 0.24,
              width: height * 0.24,
              borderRadius: height * 0.12,
              margin: height * 0.006,
            }}
            source={require('../assets/images/suggestion.png')}
          />
          <Icon
            name="close"
            style={{position: 'absolute', right: 10, top: 10}}
            size={21}
            color="#444"
          />
          <Text style={{marginTop: 5, fontWeight: 'bold', color: '#444444'}}>
            Connect Contacts
          </Text>
          <Text style={{fontSize: 12, color: '#989898'}}>
            Find people you know
          </Text>
          <Btn activeOpacity={0.6}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Connect</Text>
          </Btn>
        </View>

        {suggestions &&
          suggestions.map((item, k) => (
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
              <Image
                style={{
                  height: height * 0.24,
                  width: height * 0.24,
                  borderRadius: height * 0.12,
                  margin: height * 0.006,
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Icon
                name="close"
                style={{position: 'absolute', right: 10, top: 10}}
                size={21}
                color="#444"
              />
              <Text
                style={{marginTop: 5, fontWeight: 'bold', color: '#444444'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 12, color: '#989898'}}>{item.desc2}</Text>
              <Btn activeOpacity={0.6}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Follow</Text>
              </Btn>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Suggestions;
