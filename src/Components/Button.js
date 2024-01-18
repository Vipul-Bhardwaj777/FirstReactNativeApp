import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({btnTxt = '', containerStyle = {}}) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, containerStyle]}>
      <View style={styles.buttonContainer}>
        <Text style={styles.txtStyle}>{btnTxt}</Text>
      </View>
    </TouchableOpacity>
  );
};

styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'orange',
    width: 100,
    height: 45,
    borderRadius: 50,
  },
  txtStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
