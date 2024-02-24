import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Main = () => {
  return (
    <View
    style={styles.container}>
      <Text style={styles.title}>ada lovelace</Text>
      <Image style={styles.image} source={require('./assets/ada_lovelace.jpg')} />
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
  image: {
    width: 224,
    height: 300,
    resizeMode: 'stretch',
  },
});

export default Main;