import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInput from './index';
import {StyleSheet} from 'react-native';

const BigButton = ({title, onPress, style, borderButton, disabled = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.mainButtonContainer,
        backgroundColor: borderButton ? '#f7f7f7' : 'red',
        borderColor: borderButton ? 'gray' : '#fff',
        borderWidth: borderButton ? 1 : 0,
      }}>
      <Text
        style={{
          ...styles.mainButtonText,
          color: borderButton ? '#000' : '#fff',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainButtonContainer: {
    backgroundColor: 'red',
    width: '100%',
    height: 60,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  mainButtonText: {fontSize: 20, color: '#fff', fontWeight: 'bold'},
});

export default BigButton;
