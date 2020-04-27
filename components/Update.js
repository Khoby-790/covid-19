import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Update = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.updateText}> Upate Title</Text>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    zIndex: 2,
    elevation: 2,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
  updateText: {
    fontWeight: '300',
    fontSize: 17,
    fontStyle: 'italic',
  },
});
