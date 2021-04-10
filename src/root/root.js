import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../views/login';
import RegisterScreen from '../views/register';

import TabNavigator from '../navigation/TabNavigator/TabNavigator';

const Stack = createStackNavigator();

function Root() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log('islogged in ', isLoggedIn);
  useEffect(() => {}, [isLoggedIn]);
  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  ////////////////////

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default Root;
