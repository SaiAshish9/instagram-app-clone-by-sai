import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Easing,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Search from './Search';
import Video from './Video';
import {StackActions, useNavigationState} from '@react-navigation/native';
import Status from './Status';
import Activity from './Activity';
import Profile from './Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideNav from '../components/SideNav';
import Settings from './Settings';

const {height, width} = Dimensions.get('window');

const Fav = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background-color: #4479fa;
  border-radius: 20px;
  position: absolute;
  bottom: ${height * 0.055}px;
  left: ${width * 0.43}px;
  z-index: 5;
`;

function MyTabBar({state, descriptors, navigation}) {
  const [video, SetIsVideo] = useState(false);
  const routes = useNavigationState((state) => state.routes);
  const videoRoute =
    routes &&
    routes[routes.length - 1].state &&
    routes[routes.length - 1].state.index == 2;
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: video || videoRoute ? '#1a1a1a' : '#fff',
        height: height * 0.07,
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }

          if (route.name == 'Play') {
            SetIsVideo(true);
          } else {
            SetIsVideo(false);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        var icon;
        switch (index) {
          case 0:
            icon = isFocused ? 'home' : 'home-outline';
            break;
          case 1:
            icon = isFocused ? 'search' : 'search-outline';
            break;
          case 2:
            icon = isFocused ? 'play' : 'play-outline';
            break;
          case 3:
            icon = isFocused ? 'heart' : 'heart-outline';
            break;
          case 4:
            break;
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPressIn={onPress}
            activeOpacity={1}
            key={index}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            {index < 4 ? (
              <Icon
                name={icon}
                size={24}
                color={
                  isFocused
                    ? video || videoRoute
                      ? '#fff'
                      : '#000'
                    : video || videoRoute
                    ? '#fff'
                    : '#000'
                }
              />
            ) : (
              <Image
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  borderColor: isFocused
                    ? video || videoRoute
                      ? '#fff'
                      : '#000'
                    : video || videoRoute
                    ? '#000'
                    : '#fff',
                  borderWidth: isFocused ? 2 : 0,
                }}
                source={require('../assets/images/profile.png')}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const ProfileS = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerStyle={{height, zIndex: 3000000, width: width * 0.6}}
      drawerType="slide"
      overlayColor="transparent"
      drawerContent={(props) => <SideNav {...props} />}
      headerMode="none">
      <Drawer.Screen name="Home" component={Profile} />
    </Drawer.Navigator>
  );
};

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Play" component={Video} />
      <Tab.Screen name="Fav" component={Activity} />
      <Tab.Screen name="Profile" component={ProfileS} />
    </Tab.Navigator>
  );
};

const HomeS = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const Index = () => {
  // const Drawer = createDrawerNavigator();

  return (
    <>
      <HomeS />
    </>
  );

  // return (
  //   <Drawer.Navigator
  //     drawerPosition='right'
  //     drawerStyle={{width}}
  //     drawerType='slide'
  //     overlayColor='transparent'
  //     drawerContent={(props)=><Direct {...props} />}
  //     headerMode="none">
  //     <Drawer.Screen name="Home" component={Tabs} />
  //     <Drawer.Screen name="Direct" component={Direct} />
  //   </Drawer.Navigator>
  // );
};

export default Index;
