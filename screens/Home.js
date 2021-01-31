import React, {useState, useEffect, useContext} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import Header from '../components/header';
import Scroll from '../components/ScrollView';
import PostCard from '../components/postCard';
import {Context} from '../api/contexts';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Direct from './Direct';

const {height, width} = Dimensions.get('window');

const Home = () => {
  const [show, setShow] = useState(false);
  const {
    state: {posts},
    fetchPosts,
  } = useContext(Context);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={{height, width, backgroundColor: '#fff'}}>
      <Header show={show} />
      <ScrollView
        pinchGestureEnabled={false}
        onScroll={() => {
          setShow(true);
        }}
        onScrollEndDrag={() => {
          setShow(false);
        }}
        style={{
          width: width,
          minHeight: height,
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: width,
          }}>
          <Scroll />
          {posts && posts.map((i, k) => <PostCard data={i} key={k} idx={k} />)}
          <View style={{height: height * 0.15, width}} />
        </View>
      </ScrollView>
    </View>
  );
};

const Main = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerStyle={{width}}
      drawerType="slide"
      overlayColor="transparent"
      drawerContent={(props) => <Direct {...props} />}
      headerMode="none">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default Main;
