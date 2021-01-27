import React, {useState} from 'react';
import {
  View,
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

const Register = ({navigation}) => {
  const [usr, setUsr] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <KeyboardAvoidingView behavior="height">
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
            marginTop: height * 0.18,
            marginBottom: height * 0.04,
          }}
        />

        <View
          style={{
            width,
            paddingHorizontal: width * 0.06,
          }}>
          <Input onChangeText={setUsr} placeholder="" />
          <Input
            onChangeText={setPass}
            secureTextEntry={true}
            placeholder="Password"
            style={{marginBottom: height * 0.02}}
          />

          <Btn
            disabled={!(usr && usr.length > 5 && pass && pass.length > 3)}
            text="Continue"
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

export default Register;
