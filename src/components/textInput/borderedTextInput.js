import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import TextInput from './index';

const BorderedText = ({
  inputStyle,
  name,
  onChangeText,
  questionTitle,
  value,
  multiline = false,
  editable = true,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  borderColor = 'black',
}) => {
  // const viewHeight = Dimensions.get('screen').height;

  return (
    <View
      style={{
        ...styles.mainButtonContainer,
        borderColor: borderColor,
      }}>
      <Text style={styles.mainButtonText}>{questionTitle}</Text>
      <View
        style={{
          shadowOpacity: 0.2,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 2,
          borderRadius: 45,
        }}>
        <TextInput
          name={name}
          onBlur={(x) => onChangeText(value?.trim())}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          editable={editable}
          multiline={multiline}
          style={{
            ...styles.mainButtonTextInput,
            ...inputStyle,
          }}
          placeholderTextColor={'gray'}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainButtonContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  mainButtonText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: '4%',
    marginLeft: '5%',
    fontWeight: 'bold',
  },
  mainButtonTextInput: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: 60,
    fontSize: 20,
    backgroundColor: '#fff',
    borderRadius: 45,
  },
});

export default BorderedText;
