import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInput from './index';
import {StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const BetterCheckBox = ({
  normalText,
  onPress,
  value,
  onValueChange,
  underlinedText,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.checkbox}>
      <CheckBox
        onTintColor={'#FAAE0C'} //ios only bunlar kaan
        onFillColor={'#FAAE0C'} //ios only bunlar kaan
        tintColor={'#FAAE0C'} //ios only bunlar kaan
        onCheckColor={'#fff'} //ios only bunlar kaan
        onAnimationType={'fill'} //ios only bunlar kaan
        offAnimationType={'fill'} //ios only bunlar kaan
        boxType={'square'} //ios only bunlar kaan
        // tintColors={true ?: ? ColorValue, false ?: ? ColorValue } Android
        //için böyle bişey varmış ama çözemedim,
        //android açıp denemdimde bi bakarsan sevinirim
        //component bu
        // https://github.com/react-native-checkbox/react-native-checkbox
        disabled={false}
        style={{
          width: 20,
          height: 20,
        }}
        value={value}
        onValueChange={onValueChange}
      />
      <Text style={{fontSize: 16, color: '#6A6A6A', marginLeft: 10}}>
        <Text
          onPress={() => alert('selam')}
          style={{textDecorationLine: 'underline'}}>
          {underlinedText && `${underlinedText} `}
        </Text>
        {normalText}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    marginVertical: '1%',
    marginLeft: 10,
  },
});

export default BetterCheckBox;
