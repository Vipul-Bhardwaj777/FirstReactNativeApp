import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Inputs = ({placeHolder}) => {
  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.textInput} placeholder={placeHolder} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 0.5,
    fontWeight: 'bold',
    marginBottom: 25,
    fontSize: 13,
  },
});
export default Inputs;
