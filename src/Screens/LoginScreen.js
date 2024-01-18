import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Inputs from '../Components/Inputs';
import Button from '../Components/Button';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <SafeAreaView>
      <View style={styles.loginMain}>
        <View style={styles.container}>
          <Text style={styles.headingTxt}>
            {isLogin ? 'Log in' : 'Sign up'}
          </Text>
          <Text style={styles.smallHeadingTxt}>
            Please Sign {isLogin ? 'in' : 'up'} to continue.
          </Text>
          {!isLogin && <Inputs placeHolder={'FULL NAME'} />}
          <Inputs placeHolder={'EMAIL'} />
          <Inputs placeHolder={'PASSWORD'} />
          <View style={styles.buttonContainer}>
            <Button btnTxt={isLogin ? 'LOGIN' : 'SIGN UP'} />
          </View>
        </View>
        <Text style={styles.toggleTxt}>
          {!isLogin ? "Don't have an account?" : 'Already have an account?'}
          <Text style={styles.signUp} onPress={handleLogin}>
            {' '}
            {isLogin ? 'Sign up' : 'Sign in'}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginMain: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    marginBottom: 20,
    marginTop: 100,
  },
  headingTxt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  smallHeadingTxt: {
    fontSize: 17,
    marginBottom: 50,
    fontWeight: 'medium',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: 10,
    marginTop: 20,
  },
  toggleTxt: {
    alignSelf: 'center',
    paddingBottom: 30,
  },
  signUp: {
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default LoginScreen;
