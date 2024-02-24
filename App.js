import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {
  const navigation = useNavigation();

  const homeNextPress = () => {
    navigation.navigate('Who Was Ada?');
  };

  return (
    <View
    style={styles.container}>
      <Text style={styles.title}>ada lovelace</Text>
      <Image style={styles.image} source={require('./assets/ada_lovelace.jpg')} />
      <Button title="Continue to 'Who was Ada?'" onPress={homeNextPress} />
    </View>
  );
};

const AdaSummary = () => {
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>who was ada?</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false, // Set this to false to hide the header
      }}>
        <Stack.Screen name="Start" component={Home} />
        <Stack.Screen name="Who Was Ada?" component={AdaSummary} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;