import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
  return (
    <View
    style={styles.container}>
      <Text style={styles.title}>ada lovelace</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7f6df',
  },
  title: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 50,
    padding: 20
  },
});

export default Main;