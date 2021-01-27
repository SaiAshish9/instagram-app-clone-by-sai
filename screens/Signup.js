import React, {useState} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';
import Btn from '../components/button';
import {Label} from '../styles/auth';
import Input from '../components/textInput';
import Tel from '../components/tel';

const {height, width} = Dimensions.get('window');

const Phone = ({navigation}) => {
  const [usr, setUsr] = useState('');

  return (
    <KeyboardAvoidingView>
      <View style={{width: '100%'}}>
        <Tel
          text={usr}
          setText={setUsr}
          onChangeText={setUsr}
          style={{marginVertical: height * 0.02}}
          placeholder="8920125544"
        />
        <View
          style={{
            marginBottom: height * 0.02,
            width: '100%',
          }}>
          <Label style={{fontSize: 13}}>
            You may receive SMS updates frm Instagram an can
          </Label>
          <Label style={{fontSize: 13}}>opt out at any time.</Label>
        </View>
        <Btn
          onPress={() => {
            navigation.push('register');
          }}
          disabled={!(usr && usr.length > 5)}
          text="Next"
        />
      </View>
    </KeyboardAvoidingView>
  );
};
const Email = ({navigation}) => {
  const [usr, setUsr] = useState(null);

  return (
    <KeyboardAvoidingView>
      <View style={{width: '100%'}}>
        <Input
          onChangeText={setUsr}
          style={{marginVertical: height * 0.02}}
          placeholder="Email"
        />
        <Btn
          onPress={() => {
            navigation.push('register');
          }}
          disabled={!(usr && usr.length > 5)}
          text="Next"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const Tabs = ({navigation}) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: height * 0.02,
          marginBottom: -height * 0.01,
        }}>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => setSelected(0)}
          style={{
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: height * 0.02,
            borderBottomColor: selected === 0 ? '#000' : 'rbga(0,0,0,0.1)',
            borderBottomWidth: selected === 0 ? 2 : 0.5,
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              opacity: selected === 0 ? 1 : 0.2,
            }}>
            PHONE
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => setSelected(1)}
          style={{
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: height * 0.02,
            borderBottomColor: selected === 1 ? '#000' : 'rbga(0,0,0,0.1)',
            borderBottomWidth: selected === 1 ? 2 : 0.5,
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              opacity: selected === 1 ? 1 : 0.2,
            }}>
            EMAIL
          </Text>
        </TouchableHighlight>
      </View>
      {selected === 0 ? (
        <Phone navigation={navigation} />
      ) : (
        <Email navigation={navigation} />
      )}
    </View>
  );
};

const SignUp = ({navigation}) => {
  return (
    <KeyboardAvoidingView>
      <View
        style={{
          width,
          height,
          backgroundColor: '#fff',
          paddingHorizontal: width * 0.06,
          alignItems: 'center',
          paddingTop: height * 0.12,
        }}>
        <Image source={require('../assets/images/default.png')} />
        <Tabs navigation={navigation} />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          paddingBottom: height * 0.01,
          height: height * 0.08,
          borderTopColor: '#ededed',
          borderTopWidth: 1,
        }}>
        <Label style={{fontSize: 12}}>Already have an account?</Label>
        <TouchableOpacity
          onPress={() => {
            navigation.push('signin');
          }}>
          <Label
            style={{
              fontWeight: 'bold',
              fontSize: 12,
              marginLeft: 3,
              color: '#053461',
            }}>
            Log in.
          </Label>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
