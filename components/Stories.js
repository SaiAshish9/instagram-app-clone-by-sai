import React, {useContext} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Entypo';
import {Context} from '../api/contexts';
import ActiveStatus from './activeStatus';
import InActiveStatus from './inActiveStatus';

const {width, height} = Dimensions.get('window');

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Stories = ({navigation, selected, setSelected}) => {
  const {
    state: {statusList},
  } = useContext(Context);

  return (
    <View>
      <View
        style={{
          marginHorizontal: width * 0.04,
        }}>
        <Row>
          <Text style={{color: '#303030', fontWeight: 'bold'}}>
            Recent Stories
          </Text>
          <Row>
            <Icon name="controller-play" size={21} />
            <Text style={{color: '#303030', fontWeight: 'bold', marginLeft: 2}}>
              Watch All
            </Text>
          </Row>
        </Row>
      </View>
      <ScrollView
        style={{marginVertical: height * 0.02}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={{width: width * 0.04, height: height * 0.35}}></View>
        {statusList &&
          statusList.map(
            (i, k) =>
              !selected.map((x) => x.name).includes(i.name) && (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    //   setSelected([...selected, i]);
                    setSelected([...selected, i]);
                    navigation.navigate('Status', {
                      data: i,
                    });
                  }}
                  key={k}>
                  <View
                    style={{
                      borderRadius: 7,
                      overflow: 'hidden',
                      alignItems: 'center',
                      flexDirection: 'column-reverse',
                      height: height * 0.35,
                      width: width * 0.33,
                      marginRight: 10,
                      paddingBottom: 15,
                    }}>
                    <Image
                      key={k}
                      source={{
                        uri: i['status-img'],
                      }}
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        borderRadius: 7,
                      }}
                    />
                    <ActiveStatus
                      disabled
                      hideText
                      data={i}
                      textColor="#fff"
                      noPadding
                    />
                  </View>
                </TouchableOpacity>
              ),
          )}
        {statusList &&
          selected.map((i, k) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('Status', {
                  data: i,
                });
              }}
              key={k}>
              <View
                style={{
                  borderRadius: 7,
                  overflow: 'hidden',
                  alignItems: 'center',
                  flexDirection: 'column-reverse',
                  height: height * 0.35,
                  width: width * 0.33,
                  marginRight: 10,
                  paddingBottom: 15,
                  opacity: 0.25,
                }}>
                <Image
                  key={k}
                  source={{
                    uri: i['status-img'],
                  }}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    borderRadius: 7,
                  }}
                />
                <ActiveStatus
                  disabled
                  hideText
                  data={i}
                  textColor="#fff"
                  noPadding
                />
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
