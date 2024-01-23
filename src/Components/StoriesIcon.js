import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const StoriesIcon = ({props}) => {
  const {name, imgUrl} = props;
  return (
    <View style={{marginLeft: 2, width: 80}}>
      <Image source={{uri: imgUrl}} style={styles.img} />
      <Text
        numberOfLines={1}
        style={{fontWeight: '500', color: '#000', textAlign: 'center'}}>
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
    borderWidth: 2,
    borderColor: `${colors?.THEME_COLOR}`,
  },
});

export default StoriesIcon;
