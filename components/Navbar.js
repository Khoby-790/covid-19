import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Navbar = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.navbarTitle}>Covid-19 Tracker</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 10,
  },
  navbarTitle: {
    fontSize: 23,
    fontWeight: '700',
  },
});
