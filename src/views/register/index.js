import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import SharedStyles from '../sharedStyles/styles';
import Styles from './styles';
import FocusAwareStatusBar from '../../components/statusBar';
import BorderedText from '../../components/textInput/borderedTextInput';
import BigButton from '../../components/bigButton/index';
import styles from './styles';
import {register} from '../../store/actions/user';

export default function RegisterScreen(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signUp = async () => {
    try {
      setIsLoading(true);
      dispatch(register(email, password));
    } catch (err) {
      Alert.alert('HATA', err.message);
    }
    setIsLoading(false);
  };

  const mailChangeHandler = (e) => {
    setEmail(e);
  };
  const usernameChangeHandler = (e) => {
    setUsername(e);
  };
  const fullNameChangeHandler = (e) => {
    setFullName(e);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'#f7f7f7'}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1}}>
        <ScrollView>
          <View style={SharedStyles.mainBg}>
            <View style={styles.inputContainer}>
              <BorderedText
                questionTitle="Email Address"
                placeholder="mail@mail.com"
                value={email}
                onChangeText={(e) => mailChangeHandler(e)}
              />
              <BorderedText
                questionTitle="Full Name"
                placeholder="name surname"
                value={fullName}
                onChangeText={(e) => fullNameChangeHandler(e)}
              />
              <BorderedText
                questionTitle="User Name"
                placeholder="username123"
                value={username}
                onChangeText={(e) => usernameChangeHandler(e)}
              />

              <BorderedText
                questionTitle="Password"
                placeholder="8 character password"
                value={password}
                onChangeText={(e) => passwordChangeHandler(e)}
                secureTextEntry={true}
              />

              {isLoading ? (
                <ActivityIndicator color="red" size="large" />
              ) : (
                <BigButton title={'Create Account'} onPress={signUp} />
              )}
            </View>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>
            <BigButton borderButton={true} title={'Continue with Facebook'} />
            <BigButton borderButton={true} title={'Continue with Gmail'} />
            <BigButton
              onPress={() => props.navigation.navigate('LoginScreen')}
              borderButton={true}
              title={'Login'}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
