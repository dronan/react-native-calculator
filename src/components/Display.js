import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default props => (
  <View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>
      {props.value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#888',
  },
  displayValue: {
    fontSize: 50,
    color: '#fff',
  },
});
