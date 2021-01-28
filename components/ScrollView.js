import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import ActiveStatus from './activeStatus';
import InActiveStatus from './inActiveStatus';
import {Context} from '../api/contexts';

const {height, width} = Dimensions.get('window');

const Scroll = () => {
  const [count, setCount] = useState(0);
  const {
    state: {statusList},
    fetchStatusList
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

        {statusList &&
          statusList.map((i, k) => (
            <ActiveStatus
              key={k}
              data={i}
              onPress={() => {
                setCount(count + 1);
              }}
            />
          ))}

        {statusList &&
          [...Array(count).keys()].map((i, k) => <InActiveStatus key={k} />)}
      </ScrollView>
    </View>
  );
};

export default Scroll;
