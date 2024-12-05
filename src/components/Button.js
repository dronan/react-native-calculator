import React from 'react';
import {StyleSheet, Dimensions, TouchableHighlight, Text} from 'react-native';

export default props => {
  return (
    <TouchableHighlight onPress={props.onCLick}>
      <Text style={style.button}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});
