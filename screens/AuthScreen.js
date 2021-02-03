import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  StatusBar,
  Easing,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import Btn from '../components/button';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Switch from './Switch';
import SignUp from './Signup';
import SignIn from './Signin';
import Title from '../components/title';
import {Link, Link1} from '../styles/auth';
import Register from './Register';
import {Context} from '../api/contexts';
import AsyncStorage from '@react-native-community/async-storage';

const {height, width} = Dimensions.get('window');

const InitialScreen = ({navigation}) => {
  const {
    signIn,
    state: {isAuth},
    isLoggedIn,
  } = useContext(Context);
  const [loading, IsLoading] = useState(true);
  const [token, setToken] = useState(null);
  
  console.disableYellowBox = true


  const wait = async () => {
    const t = await AsyncStorage.getItem('token');
    setToken(t);
    setTimeout(() => {
      IsLoading(false);
    }, 800);
  };

  useEffect(() => {
    wait();
    // isLoggedIn();
  }, []);

  return (
    <View
      style={{height, width, alignItems: 'center', backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {token === null && !loading && (
        <>
          <Title style={{marginTop: height * 0.18}} />
          <Image
            style={{
              height: height * 0.16,
              width: height * 0.16,
              marginTop: height * 0.05,
              borderRadius: height * 0.08,
            }}
            source={require('../assets/images/profile.png')}
          />
          <Text
            style={{
              marginVertical: height * 0.027,
              color: '#999',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            saiashish9
          </Text>
          <View style={{width: '100%', paddingHorizontal: width * 0.06}}>
            <Btn
              onPress={() => {
                signIn();
              }}
              text="Log In"
            />
            <Link text="Remove" />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              height: height * 0.1,
              borderTopColor: '#ededed',
              borderTopWidth: 1,
            }}>
            <Link
              onPress={() => {
                navigation.push('switch');
              }}
              btn
              text="Switch Accounts"
              style={{width: '49%'}}
            />
            <View
              style={{
                width: '2%',
                height: height * 0.08,
                borderLeftColor: '#ededed',
                borderLeftWidth: 1,
              }}></View>
            <Link
              onPress={() => {
                navigation.push('signup');
              }}
              btn
              text="Sign Up"
              style={{width: '49%'}}
            />
          </View>
        </>
      )}
      {/* {loading && (
        <Image
          source={require('../assets/images/splash.png')}
          style={{height: '100%', width: '100%'}}
        />
      )} */}
    </View>
  );
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const AuthScreen = () => {
  const Stack = createStackNavigator();
  //   gestureEnabled: true,
  // slide right to go back

  return (
    <Stack.Navigator
      initialRouteName="auth"
      screenOptions={{
        transitionSpec: {
          open: closeConfig,
          close: closeConfig,
        },
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}
      headerMode="none">
      <Stack.Screen name="auth" component={InitialScreen} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="switch" component={Switch} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthScreen;
