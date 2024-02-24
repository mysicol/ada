import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
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
      <Pressable style={styles.nextButton} onPress={homeNextPress}>
      <Text style={styles.buttonText}>
          start module {'>'}
      </Text>
      </Pressable>
    </View>
  );
};

const AdaSummary = () => {
  const navigation = useNavigation();

  const whoWasAdaNextPress = () => {
    navigation.navigate('Analytical Engine');
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>who was ada?</Text>
      <View style = {styles.bodyContainer}>
        <Text style ={styles.body}>Ada Lovelace is usually attributed with being the 
        <Text style={{fontWeight: "bold"}}> first computer scientist</Text>
        <Text>.</Text></Text>
        <Text style = {styles.body}>{'\n'}Which is insane, because she lived 30 years prior to the invention of the lightbulb!</Text>
        <Text style = {styles.body}>{'\n'}Ada Lovelace's contributions were mainly theoretical. She worked with Charles Babbage to design
        <Text style={{fontWeight: "bold"}}> the Analytical Engine </Text>
        <Text> - which, although never created, is widely recognized as being the world's first computer.</Text></Text>
        <Text style={styles.body}>{'\n'}That is because the Analytical Engine was
        <Text style={{fontWeight: "bold"}}> Turing Complete</Text>
        <Text>, meaning it had important capabilities like </Text>
        <Text style={{fontWeight: "bold"}}>abstraction</Text>
        <Text> and </Text>
        <Text style={{fontWeight: "bold"}}>branching reasoning</Text>
        <Text> which made it as powerful as a modern-day computer.</Text>
        </Text>
      </View>
      <Pressable style={styles.nextButton}>
      <Text style={styles.buttonText} onPress={whoWasAdaNextPress}>
          the analytical engine {'>'}</Text>
        </Pressable>
    </View>
  );
};

const AnalyticalEngine = () => {
  const navigation = useNavigation();

  const analyticalEngineNextPress = () => {
    navigation.navigate('Computational Thinking');
  };

  const theMillPress = () => {
    navigation.navigate('The Mill');
  };

  const theStorePress = () => {
    navigation.navigate('The Store');
  };

  const punchCard_PrinterPress = () => {
    navigation.navigate('I/O Units');
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>who was ada?</Text>
      <View style = {styles.bodyContainer}>
        <Text style ={styles.body}></Text>
        <View style={{alignItems: 'center', padding: 30}}>
        <View style={{ flexDirection: 'row'}}>
          <View style={{ position: 'relative', bottom: 0, right: 0 }}>
            <TouchableOpacity onPress={theStorePress}>
              <Image source={require('./assets/TheStore.png')} style={{ width: 300, height: 310 }} />
            </TouchableOpacity>
          </View>
          <View style={{ position: 'relative', bottom: 0, left: 0 }}>
            <TouchableOpacity onPress={theMillPress}>
              <Image source={require('./assets/TheMill.png')} style={{ width: 240, height: 150 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={punchCard_PrinterPress}>
              <Image source={require('./assets/PunchCard_Printer.png')} style={{ width: 240, height: 160 }} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
      <Pressable style={styles.nextButton} onPress={analyticalEngineNextPress}>
        <Text style={styles.buttonText}>continue to "computational thinking" {'>'}</Text>
      </Pressable>
    </View>
  );
};

const TheStore = () => {
  const navigation = useNavigation();

  const backToAnalyticalmachinePress = () => {
    navigation.navigate('Analytical Engine');
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>the store</Text>
      <View style = {styles.bodyContainer}>
        <Text style ={styles.body}> • testing testing testing</Text>
      </View>
      <Pressable style={styles.nextButton} onPress={backToAnalyticalmachinePress}>
        <Text style={styles.buttonText}>{'<'} back to "analytical engine"</Text>
      </Pressable>
    </View>
  );
};

const TheMill = () => {
  const navigation = useNavigation();

  const backToAnalyticalmachinePress = () => {
    navigation.navigate('Analytical Engine');
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>the mill</Text>
      <View style = {styles.bodyContainer}>
        <Text style ={styles.body}> • testing testing testing</Text>
      </View>
      <Pressable style={styles.nextButton} onPress={backToAnalyticalmachinePress}>
        <Text style={styles.buttonText}>{'<'} back to "analytical engine"</Text>
      </Pressable>
    </View>
  );
};

const PunchCard_Printer = () => {
  const navigation = useNavigation();

  const backToAnalyticalmachinePress = () => {
    navigation.navigate('Analytical Engine');
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>i/o units</Text>
      <View style = {styles.bodyContainer}>
        <Text style ={styles.body}> • testing testing testing</Text>
      </View>
      <Pressable style={styles.nextButton} onPress={backToAnalyticalmachinePress}>
        <Text style={styles.buttonText}>{'<'} back to "analytical engine"</Text>
      </Pressable>
    </View>
  );
};

const computationalThinking = () => {
  const navigation = useNavigation();

  const computationalThinkingNextPress = () => {
    navigation.navigate('Impact');
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>computational thinking</Text>
      <View style = {styles.bodyContainer}>
        <Text style ={styles.body}> • testing testing testing</Text>
      </View>
      <Pressable style={styles.nextButton} onPress={computationalThinkingNextPress}>
        <Text style={styles.buttonText}>continue to "impact" {'>'}</Text>
      </Pressable>
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
        <Stack.Screen name="Analytical Engine" component={AnalyticalEngine} />
        <Stack.Screen name="Computational Thinking" component={computationalThinking} />
        <Stack.Screen name="The Mill" component={TheMill} />
        <Stack.Screen name="The Store" component={TheStore} />
        <Stack.Screen name="I/O Units" component={PunchCard_Printer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2bb8bd',
  },
  bodyContainer: {
    width: 700,
    height: 500,
    padding: 20,
    alignItems: 'left',
    backgroundColor: '#f7f6df',
    borderRadius: 12
  },
  title: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#f7f6df',
    fontSize: 50,
    padding: 20
  },
  body: {
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    fontSize: 18,
    marginTop: 20
  },
  image: {
    width: 224,
    height: 300,
    resizeMode: 'stretch',
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#f7f6df',
    fontSize: 20
  }
});

export default App;