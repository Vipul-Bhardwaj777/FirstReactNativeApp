import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const ChatBox = ({item}) => {
  const {imgUrl, name, status, time} = item;
  return (
    <View>
      <View style={styles.chatBoxMain}>
        <Image source={{uri: imgUrl}} style={styles.chatImg} />

        <View style={styles.textDiv}>
          <View style={styles.textTop}>
            <Text style={{fontWeight: '500', fontSize: 16, color: '#000000'}}>
              {name}
            </Text>
            <Text style={{fontSize: 13}}>{time}</Text>
          </View>
          <View style={styles.textBottom}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                width: '70%',
              }}>
              {status}
            </Text>
            <View>
              <Text style={{color: `${colors?.THEME_COLOR}`}}>Read</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  chatBoxMain: {
    borderBottomWidth: 1,
    borderColor: `${colors?.BORDER_GREY}`,
    paddingVertical: 15,
    flexDirection: 'row',
    // flex: 1,
  },
  textDiv: {
    paddingTop: 4,
    paddingLeft: 10,
  },
  textTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
    alignItems: 'center',
  },
  textBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
    alignItems: 'center',
  },
  chatImg: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
  },
});

export default ChatBox;
