import React from 'react';
import {View, Image, TouchableOpacity, Dimensions, Easing} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Direct from './Direct';

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
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
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
              <Icon name={icon} size={24} color={isFocused ? '#000' : '#000'} />
            ) : (
              <Image
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  borderColor: isFocused ? '#000' : '#fff',
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

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Play" component={Home} />
      <Tab.Screen name="Fav" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
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
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerPosition='right'
      drawerStyle={{width}}
      drawerType='slide'
      overlayColor='transparent'
      drawerContent={(props)=><Direct {...props} />}
      headerMode="none">
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Direct" component={Direct} />
    </Drawer.Navigator>
  );
};

export default Index;
