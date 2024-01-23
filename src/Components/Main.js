import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import StoriesIcon from './StoriesIcon';
import colors from '../constants/colors';
import ChatBox from './ChatBox';

const Main = () => {
  const contacts = [
    {
      uid: '1',
      name: 'John ',
      status: 'Online and ready to chat! 🚀',
      imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: '8:20 Am',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      status: '😴 Taking a nap. Do not disturb.',
      imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      time: '8:20 Am',
    },
    {
      uid: '3',
      name: 'Bob Johnson',
      status: 'Out for a walk. Catch you later!',
      imgUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      time: '8:20 Am',
    },
    {
      uid: '4',
      name: 'Alice Williams',
      status: '🎉 Celebrating a victory!',
      imgUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      time: '8:20 Am',
    },
    {
      uid: '5',
      name: 'Charlie Brown',
      status: '📚 Studying hard. No time for distractions.',
      imgUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      time: '8:20 Am',
    },
    {
      uid: '6',
      name: 'Eva Davis',
      status: 'Craving ice cream. Anyone up for a treat? 🍦',
      imgUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
      time: '8:20 Am',
    },
    {
      uid: '7',
      name: 'Frank Miller',
      status: '🎸 Jamming on the guitar. Rock on!',
      imgUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
      time: '8:20 Am',
    },
    {
      uid: '8',
      name: 'Grace Taylor',
      status: 'On vacation. Beach vibes! 🏖️',
      imgUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      uid: '9',
      name: 'Henry Wilson',
      status: 'Getting creative with art. 🎨',
      imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      uid: '10',
      name: 'Ivy Robinson',
      status: '💤 Offline and taking a break.',
      imgUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
      time: '8:20 Am',
    },
  ];
  return (
    <View>
      <View style={styles.storiesDiv}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '500',
            color: '#000',
            marginBottom: 10,
          }}>
          Stories
        </Text>
        <View>
          <FlatList
            horizontal
            data={contacts}
            renderItem={({item}) => <StoriesIcon props={item} />}
            keyExtractor={item => item?.uid}
          />
        </View>
      </View>
      <View>
        <FlatList
          style={styles.chatDiv}
          data={contacts}
          renderItem={({item}) => <ChatBox item={item} />}
          keyExtractor={item => item?.uid}
          ListFooterComponent={() => (
            <View
              style={{
                height: 450,
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesDiv: {
    paddingLeft: 15,
    marginBottom: 25,
  },
  chatDiv: {
    borderTopWidth: 1,
    borderColor: `${colors?.BORDER_GREY}`,
    marginHorizontal: 15,
  },
});

export default Main;
