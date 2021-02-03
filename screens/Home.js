import React, {useState, useEffect, useContext} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import Header from '../components/header';
import Scroll from '../components/ScrollView';
import PostCard from '../components/postCard';
import {Context} from '../api/contexts';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Direct from './Direct';
import Suggestions from '../components/suggestions';
import Stories from '../components/Stories';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

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
          <Scroll
            selected={selected}
            setSelected={setSelected}
            navigation={navigation}
          />
          {posts &&
            posts.map((i, k) => k < 1 && <PostCard data={i} key={k} idx={k} />)}
          {posts && <Suggestions />}
          {posts &&
            posts.map(
              (i, k) => k > 0 && k < 3 && <PostCard data={i} key={k} idx={k} />,
            )}
          {posts && (
            <Stories
              selected={selected}
              setSelected={setSelected}
              navigation={navigation}
            />
          )}
          {posts &&
            posts.map((i, k) => k > 2 && <PostCard data={i} key={k} idx={k} />)}
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
