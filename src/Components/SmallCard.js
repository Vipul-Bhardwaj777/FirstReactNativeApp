import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const SmallCard = ({img}) => {
  return (
    <View>
      <View style={styles.card}>
        <Image source={{uri: img}} style={styles.img} />
        <Text style={styles.cardTxt}>HOMES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    elevation: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardTxt:{
    position:'absolute',
    bottom:5,
    fontWeight:'bold',
    color:'#fff',
  }
});

export default SmallCard;
