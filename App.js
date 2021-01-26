import React from 'react';

import {StyleSheet, View, Text,StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' />
      <Text>Instagram</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
});

export default App;
