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
import {login} from '../../store/actions/user';
import SharedStyles from '../sharedStyles/styles';
import Styles from './styles';
import FocusAwareStatusBar from '../../components/statusBar';
import BorderedText from '../../components/textInput/borderedTextInput';
import BigButton from '../../components/bigButton/index';
import styles from './styles';

export default function LoginScreen(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const logIn = async () => {
    try {
      setIsLoading(true);
      dispatch(login(email, password));
    } catch (err) {
      Alert.alert('HATA', err.message);
    }
    setIsLoading(false);
  };

  const mailChangeHandler = (e) => {
    setEmail(e);
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
        <ScrollView
          contentContainerStyle={{
            flex: 1,
          }}
          style={Styles.scrollContainer}>
          <View style={SharedStyles.mainBg}>
            <View style={styles.inputContainer}>
              <BorderedText
                questionTitle="Email Address"
                placeholder="mail@mail.com"
                value={email}
                onChangeText={(e) => mailChangeHandler(e)}
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
                <BigButton title={'Login'} onPress={logIn} />
              )}
            </View>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>
            <BigButton
              onPress={() => props.navigation.navigate('RegisterScreen')}
              borderButton={true}
              title={'Create Account'}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
