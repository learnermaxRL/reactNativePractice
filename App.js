import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';

const Box = (props) => {
  return <Text>{props.colorstring}</Text>;
};

const App = () => {
  return (
    <SafeAreaView>
      <Text>Here are some boxes of different colours</Text>
      <View style={styles.cyan}>
        <Box colorstring="Cyan" />
      </View>
      <View style={styles.orange}>
        <Box colorstring="Cyan" />
      </View>
      <View style={styles.blue}>
        <Box colorstring="Cyan" />
      </View>
      <View style={styles.magenta}>
        <Box colorstring="Cyan" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  blue: {
    backgroundColor: '#268bd2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  magenta: {
    backgroundColor: '#d33682',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  orange: {
    backgroundColor: '#cb4b16',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default App;
