import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import FeIcon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

const Card = ({data, idx, ...props}) => {
  const [liked, isLiked] = useState(false);
  const [bookmarked, isBookmarked] = useState(false);

  return (
    <>
      <View
        {...props}
        style={{
          width: '100%',
          borderTopColor: idx == 0 ? '#eee' : '#fff',
          borderTopWidth: 1,
          marginBottom: height * 0.02,
        }}>
        <View
          style={[
            styles.row,
            {
              width,
              padding: width * 0.04,
              height: height * 0.07,
            },
          ]}>
          <View style={styles.row}>
            <Image
              resizeMode="cover"
              style={{
                height: height * 0.04,
                width: height * 0.04,
                borderRadius: height * 0.02,
              }}
              source={{
                uri: data.ProfileURL,
              }}
            />
            <Text
              style={{marginLeft: 10, color: '#393939', fontWeight: 'bold'}}>
              {data.name}
            </Text>
          </View>

          <Icon color="#262626" name="ellipsis-vertical" size={18} />
        </View>

        <Image
          resizeMode="contain"
          style={{
            width: '100%',
            backgroundColor: '#fcfcfc',
            height: height * 0.45,
          }}
          source={{
            uri: data.url,
          }}
          //     uri:'https://instagram.fdel36-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/142744716_754233162161641_1465122304381207792_n.jpg?_nc_ht=instagram.fdel36-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=J3A3zYk9NKsAX9HJpfJ&tp=1&oh=fd1445a0ff88b3b65a61ea0536653ce3&oe=603D73F0'
        />
        <View
          style={[
            styles.row,
            {
              width,
              padding: width * 0.04,
              height: height * 0.07,
            },
          ]}>
          <View style={[styles.row]}>
            <TouchableOpacity
              onPressIn={() => {
                isLiked(!liked);
              }}>
              <AIcon
                name={liked ? 'heart' : 'hearto'}
                color={liked ? '#ea4a59' : '#393939'}
                size={24}
              />
            </TouchableOpacity>
            <Icon
              style={{marginHorizontal: 10}}
              name="chatbubble-outline"
              color="#393939"
              size={24}
            />
            <FeIcon color="#393939" name="send" size={24} />
          </View>
          <TouchableOpacity
            onPressIn={() => {
              isBookmarked(!bookmarked);
            }}>
            <FIcon
              name={bookmarked ? 'bookmark' : 'bookmark-o'}
              color="#393939"
              size={24}
            />
          </TouchableOpacity>
        </View>
        <Text style={{marginLeft: 10, color: '#393939', fontWeight: 'bold'}}>
          {data.CommentsCount} likes
        </Text>
        <View style={[styles.row, {justifyContent: 'flex-start'}]}>
          <Text style={{marginLeft: 10, color: '#393939', fontWeight: 'bold'}}>
            {data.name}
          </Text>
          <Text style={{marginLeft: 5, color: '#7f7f7f'}}>
            {data.Title}
          </Text>
        </View>
        <Text style={{marginLeft: 10, color: '#b5b5b5', marginVertical: 3}}>
          View all {data.CommentsCount} comments
        </Text>
        <Text
          style={{
            fontSize: 11,
            marginLeft: 10,
            color: '#b5b5b5',
            marginVertical: 3,
          }}>
          {data.Time}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default Card;
