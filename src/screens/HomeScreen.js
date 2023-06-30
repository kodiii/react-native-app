import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../components/Form';
import SubmitButton from '../components/SubmitButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Form />
      <SubmitButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;