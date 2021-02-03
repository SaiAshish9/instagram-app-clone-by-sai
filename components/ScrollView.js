import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ActiveStatus from './activeStatus';
import InActiveStatus from './inActiveStatus';
import {Context} from '../api/contexts';
import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const Scroll = ({navigation, selected, setSelected}) => {
  const {
    state: {statusList},
    fetchStatusList,
  } = useContext(Context);

  useEffect(() => {
    fetchStatusList();
  }, []);

  return (
    <View
      style={{
        marginVertical: height * 0.01,
      }}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <TouchableOpacity>
          <View style={{justifyContent: 'center', marginLeft: width * 0.04}}>
            <Image
              source={require('../assets/images/profile.png')}
              style={{
                height: height * 0.09,
                width: height * 0.09,
                borderRadius: height * 0.045,
                marginRight: width * 0.04,
              }}
            />
            <View
              style={{
                position: 'absolute',
                right: '18%',
                bottom: '27%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 18,
                width: 18,
                border: 'none',
                backgroundColor: 'rgb(2,149,247)',
                borderRadius: 9,
              }}>
              <Icon name="pluscircleo" size={18} color="#fff" />
            </View>

            <Text
              style={{
                fontSize: 12,
                marginTop: 5,
                fontWeight: 'bold',
                color: '#6e6e6e',
              }}>
              Your Story
            </Text>
          </View>
        </TouchableOpacity>

        {statusList &&
          statusList.map(
            (i, k) =>
              !selected.map((x) => x.name).includes(i.name) && (
                <ActiveStatus
                  key={k}
                  setSelected={() => {
                    setSelected([...selected, i]);
                  }}
                  selected={selected}
                  data={i}
                  onPress={() => {
                    setSelected([...selected, i]);
                    navigation.navigate('Status', {
                      data: i,
                      statusList: statusList,
                      current: k,
                    });
                  }}
                />
              ),
          )}

        {statusList &&
          selected.map((i, k) => (
            <InActiveStatus
              onPress={() => {
                navigation.navigate('Status', {
                  data: i,
                });
              }}
              data={i}
              key={k}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Scroll;
