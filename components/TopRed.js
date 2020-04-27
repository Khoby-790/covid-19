import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TopRed = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.topRedHeader}>
        Report your COVID-19 health status
      </Text>
      <Text style={styles.topRedParagrapgh}>
        Take one minute every day to report your covid 19 status and help us map
        the spread of corona virus and to prevent it{' '}
      </Text>
    </View>
  );
};

export default TopRed;

const styles = StyleSheet.create({
  container: {
    // height: 50,
    // width: '95%',
    backgroundColor: '#DC1F89',
    padding: 10,
    borderRadius: 12,
    alignSelf: 'center',
  },
  topRedHeader: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  topRedParagrapgh: {
    fontSize: 16,
    color: '#fff',
  },
});
