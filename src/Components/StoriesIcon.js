import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

const StoriesIcon = ({props}) => {
  const {name, imgUrl} = props;
  return (
    <View style={{marginRight: 7,width:'7.5%'}}>
      <Image source={{uri: imgUrl}} style={styles.img} />
      <Text numberOfLines={1} style={{fontWeight: '500', color: '#000'}}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginBottom: 5,
  },
});

export default StoriesIcon;
