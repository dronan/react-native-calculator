import React from 'react';
import {StyleSheet, Dimensions, TouchableHighlight, Text} from 'react-native';

export default props => {
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.operation) stylesButton.push(styles.operationButton);
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    height: Dimensions.get('window').width / 5,
    width: Dimensions.get('window').width / 5,
    padding: 0,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 2,
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 5) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 5) * 3,
  },
});
