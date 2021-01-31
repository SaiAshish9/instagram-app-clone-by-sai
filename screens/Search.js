import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import {Context} from '../api/contexts';
import Grid12 from '../components/Grid12';
import Grid21 from '../components/Grid21';
import Grid3 from '../components/Grid3';

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

const Search = () => {
  const {
    state: {categories},
    fetchCategories,
  } = useContext(Context);

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
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
            paddingLeft: width * 0.04,
            marginBottom: height * 0.015,
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories
              ? categories.map((i, k) => (
                  <TouchableOpacity style={{marginRight: width * 0.04}} key={k}>
                    <Btn>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: '#6e6e6e',
                        }}>
                        {i.Title}
                      </Text>
                    </Btn>
                  </TouchableOpacity>
                ))
              : [...Array(9).keys()].map((i, k) => (
                  <TouchableOpacity style={{marginRight: width * 0.04}} key={k}>
                    <Btn
                      loading
                      style={{
                        height: height * 0.048,
                        width: height * 0.09,
                      }}></Btn>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </Row>

        <Grid12 />
        <Grid3 />
        <Grid21 />
        <Grid3 />
        <Grid12 />
        <Grid3 />
      </ScrollView>
    </View>
  );
};

export default Search;
