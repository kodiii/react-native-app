import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextAreaField = ({ label, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
      multiline
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});

export default TextAreaField;