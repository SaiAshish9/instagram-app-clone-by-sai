import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Easing} from 'react-native';
import AuthScreen from './screens/AuthScreen';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Index from './screens/Index';
import {Provider} from './api/contexts';

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={(navigator) => {}}>
      <Stack.Navigator
        screenOptions={{
          transitionSpec: {
            open: closeConfig,
            close: closeConfig,
          },
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName="auth"
        headerMode="none">
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="home" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
