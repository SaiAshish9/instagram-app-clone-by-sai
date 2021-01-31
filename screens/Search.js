import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import {Context} from '../api/contexts';
import Grid12 from '../components/Grid12';
import Grid21 from '../components/Grid21';
import Grid3 from '../components/Grid3';
import SafeAreaView from 'react-native-safe-area-view';
import FocusAwareStatusBar from "../components/FocusStatusBar"

const {height, width} = Dimensions.get('window');

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.View`
  border-radius: 10px;
  padding: ${height * 0.01}px ${width * 0.05}px;
  border: 2px solid #efefef;
  background: ${(props) => (props.loading ? '#efefef' : '#fff')}
  align-items: center;
  justify-content: center;
`;

const Search = ({navigation}) => {
  const {
    state: {categories, media},
    fetchCategories,
    fetchMedia,
  } = useContext(Context);

  useEffect(() => {
    fetchCategories();
    fetchMedia();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <FocusAwareStatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={{height, width, backgroundColor: '#fff'}}>
        <Row style={{paddingRight: width * 0.04}}>
          <View
            style={{
              backgroundColor: '#efefef',
              height: height * 0.05,
              borderRadius: 10,
              alignItems: 'center',
              paddingHorizontal: '4%',
              width: '82 %',
              flexDirection: 'row',
              marginBottom: height * 0.02,
              marginVertical: height * 0.02,
              marginHorizontal: width * 0.04,
            }}>
            <Icon name="search-outline" size={18} color="#b9b9b9" />
            <Text style={{marginLeft: 10, color: '#b9b9b9', fontSize: 16}}>
              Search
            </Text>
          </View>
          <Icon name="scan" size={27} color="#282828" />
        </Row>
        <ScrollView
          style={{marginBottom: height * 0.07}}
          showsVerticalScrollIndicator={false}>
          <Row
            style={{
              marginBottom: height * 0.015,
            }}>
            {categories ? (
              <FlatList
                data={categories}
                horizontal
                keyExtractor={(item) => `${item.ID}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index, separators}) => (
                  <TouchableOpacity
                    style={{
                      marginRight: width * 0.04,
                      marginLeft: index === 0 ? width * 0.04 : 0,
                    }}
                    key={`${item.ID}`}>
                    <Btn>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: '#6e6e6e',
                        }}>
                        {item.Title}
                      </Text>
                    </Btn>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[...Array(9).keys()].map((i, k) => (
                  <TouchableOpacity style={{marginRight: width * 0.04}} key={k}>
                    <Btn
                      loading
                      style={{
                        marginLeft: k === 0 ? width * 0.04 : 0,
                        height: height * 0.048,
                        width: height * 0.09,
                      }}></Btn>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </Row>

          <Grid12 data={media} count={0} navigation={navigation} />
          <Grid3 data={media} count={3} />
          <Grid21 data={media} count={9} />
          <Grid3 data={media} count={12} />
          <Grid12 data={media} count={18} />
          {/* <Grid3 data={media} count={21} hide /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
