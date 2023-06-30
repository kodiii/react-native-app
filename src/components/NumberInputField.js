import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const NumberInputField = ({ placeholder, handleInputChange, value }) => {
  const [error, setError] = useState('');

  const validateInput = (text) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(text)) {
      setError('Invalid input. Only numbers are allowed.');
    } else {
      setError('');
      handleInputChange(text);
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={validateInput}
        value={value}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default NumberInputField;