import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isLightMode = useColorScheme() === 'light';

  return (
    <SafeAreaView style={Styles.safeView}>
      <View
        style={[Styles.container, isLightMode ? Styles.light : Styles.dark]}>
        <Text style={isLightMode ? Styles.darkTxt : Styles.whiteTxt}>
          Dark Theme
        </Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    backgroundColor: '#FFFFFF',
  },
  dark: {
    backgroundColor: '#313131',
  },
  whiteTxt: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  darkTxt: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
