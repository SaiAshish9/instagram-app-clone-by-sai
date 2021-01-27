import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Title from '../components/title';
import Btn from '../components/button';
import Icon from 'react-native-vector-icons/Ionicons';
import {Link, Label} from '../styles/auth';

const {height, width} = Dimensions.get('window');

const Switch = ({navigation}) => (
  <View style={{height, width, backgroundColor: '#fff', alignItems: 'center'}}>
    <TouchableOpacity
      style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Label
        style={{
          marginTop: height * 0.03,
        }}>
        English (United States){' '}
        <Icon name="chevron-down-outline" size={15} color="#9d9d9d" />
      </Label>
    </TouchableOpacity>

    <Title
      style={{
        marginTop: height * 0.18,
      }}
    />
    <View
      style={{
        marginTop: height * 0.15,
        width: '100%',
        paddingHorizontal: width * 0.06,
      }}>
      <Btn logoFB text="Continue as Sai Ashish" />
      <Label style={{marginTop: 5}}>
        Sarthak, Sakshi, Dhruv, Vaishu and 41 other friends
      </Label>
      <Label>are using Instagram.</Label>
    </View>

    <View
      style={{
        marginTop: height * 0.04,
        width,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: width * 0.06,
      }}>
      <View
        style={{
          borderTopColor: '#ededed',
          width: '45%',
          borderTopWidth: 1,
        }}></View>
      <Label style={{fontWeight: 'bold'}}>OR</Label>
      <View
        style={{
          borderTopColor: '#ededed',
          width: '45%',
          borderTopWidth: 1,
        }}></View>
    </View>

    <Link
      onPress={() => {
        navigation.push('signup');
      }}
      btn
      text="Sign Up with email or phone number"
    />

    <View
      style={{
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: height * 0.01,
        height: height * 0.08,
        borderTopColor: '#ededed',
        borderTopWidth: 1,
      }}>
      <Label style={{fontSize: 12}}>Already have an account?</Label>

      <TouchableOpacity
        onPress={() => {
          navigation.push('signin');
        }}>
        <Label
          style={{
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: 3,
            color: '#053461',
          }}>
          Log in.
        </Label>
      </TouchableOpacity>
    </View>
  </View>
);

export default Switch;
