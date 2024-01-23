import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.headMain}>
      <View style={styles.firstDiv}>
        <Text style={styles.left}>YoChat</Text>
        <View style={styles.right}>
          <Text style={{color: '#fff'}}>Search</Text>
          <Text style={{color: '#fff'}}>Ham</Text>
        </View>
      </View>

      <View style={styles.secondDiv}>
        <Text style={styles.secondLinks}>All Chat</Text>
        <Text style={styles.secondLinks}>Groups</Text>
        <Text style={styles.secondLinks}>Calls</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headMain: {
    height: 125,
    backgroundColor: `${colors?.THEME_COLOR}`,
    marginBottom: 20,
  },
  firstDiv: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  left: {
    fontWeight: '500',
    fontSize: 25,
    color: '#fff',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  secondDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondLinks: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default Header;
