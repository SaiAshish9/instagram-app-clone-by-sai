import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Title from '../components/title';
import Btn from '../components/button';
import Icon from 'react-native-vector-icons/Ionicons';
import {Label} from '../styles/auth';
import Input from '../components/textInput';

const {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  const [usr, setUsr] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <KeyboardAvoidingView
    behavior="height"
    >
      {/* ="padding" */}
      <View
        style={{height, width, backgroundColor: '#fff', alignItems: 'center'}}>
        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Label
            style={{
              marginTop: height * 0.03,
            }}>
            English (United States){' '}
            <Icon name="chevron-down-outline" size={15} color="#9d9d9d" />
          </Label>
        </TouchableOpacity>

        <Title
          style={{
            marginTop: height * 0.12,
            marginBottom: height * 0.04,
          }}
        />

        <View
          style={{
            width,
            paddingHorizontal: width * 0.06,
          }}>
          <Input
            onChangeText={setUsr}
            placeholder="Phone number, email or username"
          />
          <Input
            onChangeText={setPass}
            secureTextEntry={true}
            placeholder="Password"
            style={{marginBottom: height * 0.02}}
          />

          <Btn
            disabled={!(usr && usr.length > 5 && pass && pass.length > 3)}
            text="Log in"
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginTop: height * 0.02,
          }}>
          <Label style={{fontSize: 12}}>Forgot your login details?</Label>
          <TouchableOpacity
            onPress={() => {
              navigation.push('signup');
            }}>
            <Label
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                marginLeft: 3,
                color: '#053461',
              }}>
              Get help logging in.
            </Label>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: height * 0.02,
            width,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: width * 0.06,
          }}>
          <View
            style={{
              borderTopColor: '#ededed',
              width: '45%',
              borderTopWidth: 1,
            }}></View>
          <Label style={{fontWeight: 'bold'}}>OR</Label>
          <View
            style={{
              borderTopColor: '#ededed',
              width: '45%',
              borderTopWidth: 1,
            }}></View>
        </View>

        <View
          style={{
            width,
            paddingVertical: width * 0.03,
            paddingHorizontal: width * 0.06,
          }}>
          <Btn
            logoFB
            style={{backgroundColor: '#2169db'}}
            text="Log in as @saiashish9"
          />
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
          <Label style={{fontSize: 12}}>Don't have an account?</Label>
          <TouchableOpacity
            onPress={() => {
              navigation.push('signup');
            }}>
            <Label
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                marginLeft: 3,
                color: '#053461',
              }}>
              Sign up.
            </Label>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
