import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Button,
  ActivityIndicator,
  Alert,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';

function AuthScreen(props) {
  const {

  } = props;
  // console.log('token', AsyncStorage.getItem('userData'));
  

  const {
    textInput
  } = styles;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const signInHandler = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await AsyncStorage.getItem('userData');
      console.log('dataToken', JSON.parse(data))
      await dispatch(authActions.signInAction(email, password));
      // props.navigation.navigate('Products');
    } catch(e) {
      setError(e);
    }
    
    setLoading(false);
  }

  const signUpHandler = async () => {
    setLoading(true);
    setError(null);
    try{
      await dispatch(authActions.signUpAction(email, password));
    } catch(e) {
      setError(e);
    }
    
    setLoading(false);
  }

  useEffect(() => {
    if(error) {
      Alert.alert('An error occured', error, [{
        text: 'Ok'
      }])
    }
  }, [error])

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={50}
    >
      <ScrollView>
        <TextInput
          style={textInput}
          keyboardType='email-address'
          defaultValue='Email ID'
          required
          autoCapitalize='none'
          errorMessage='Please enter valid email address'
          onChangeText={(text) => { setEmail(text) }}
        />
        <TextInput
          style={textInput}
          keyboardType='email-address'
          defaultValue=''
          secureTextEntry
          required
          minLength={5}
          autoCapitalize='none'
          errorMessage='Please enter valid password'
          onChangeText={(text) => { setPassword(text) }}
        />
        {
          isLoading ? <ActivityIndicator color='red' size='small' /> :
            <View><Button title='Login' onPress={signInHandler} />
              <Button title='Sign up' onPress={signUpHandler} />
            </View>
        }
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

AuthScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Authenticate',
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5
  }
});

export default AuthScreen;
