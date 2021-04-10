import React from 'react';
import {Text, Platform} from 'react-native';

const CustomText = (props) => (
  <Text
    style={[
      {fontFamily: Platform.OS === 'android' ? 'WorkSans' : 'Arial'},
      {...props.style},
    ]}>
    {props.children}
  </Text>
);

export default CustomText;
