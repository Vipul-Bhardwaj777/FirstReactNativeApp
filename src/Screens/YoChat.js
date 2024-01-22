import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';

const YoChat = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Main />
      </View>
    </SafeAreaView>
  );
};

export default YoChat;
