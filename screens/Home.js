import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopRed from '../components/TopRed';
import Navbar from '../components/Navbar';
import WorldReport from '../components/WorldReport';
import CountryReport from '../components/CountryReport';
import Update from '../components/Update';
import Screen from '../components/Screen';

const App = () => {
  return (
    <View style={styles.container}>
      <Screen>
        <Navbar />
        <TopRed />
        <WorldReport />
        <CountryReport />
        <View style={styles.row}>
          <Text style={styles.latestUpdatetTitle}>Latest Updates</Text>
          <Text>{new Date().toLocaleDateString()}</Text>
        </View>
        {[1, 2].map((update, key) => (
          <Update key={key} />
        ))}
      </Screen>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  latestUpdatetTitle: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});
