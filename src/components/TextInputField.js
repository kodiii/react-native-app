```javascript
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ label, value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputField;
```