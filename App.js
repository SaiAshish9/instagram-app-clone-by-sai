import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Easing} from 'react-native';
import AuthScreen from './screens/AuthScreen';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Index from './screens/Index';
import {Provider} from './api/contexts';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {setNavigator} from './api/navigationRef';
import {Context} from './api/contexts';

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const App = () => {
  const Stack = createStackNavigator();
  const {checkUser} = useContext(Context);
  const [loading, IsLoading] = useState(true);
  let nav;

  const check = async () => {
    setTimeout(() => {
      checkUser(nav);
      IsLoading(false);
    }, 200);
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={(navigator) => {
          setNavigator(navigator);
          nav = navigator;
        }}>
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
          headerMode="none">
          <Stack.Screen name="auth" component={AuthScreen} />
          <Stack.Screen name="home" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
