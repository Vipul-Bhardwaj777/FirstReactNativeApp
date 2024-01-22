import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import StoriesIcon from './StoriesIcon';

const Main = () => {
  const contacts = [
    {
      uid: '1',
      name: 'John Doejhklhkhlhjjkhk',
      status: 'Online and ready to chat! 🚀',
      imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      uid: '2',
      name: 'Jane Smith',
      status: '😴 Taking a nap. Do not disturb.',
      imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      uid: '3',
      name: 'Bob Johnson',
      status: 'Out for a walk. Catch you later!',
      imgUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      uid: '4',
      name: 'Alice Williams',
      status: '🎉 Celebrating a victory!',
      imgUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      uid: '5',
      name: 'Charlie Brown',
      status: '📚 Studying hard. No time for distractions.',
      imgUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      uid: '6',
      name: 'Eva Davis',
      status: 'Craving ice cream. Anyone up for a treat? 🍦',
      imgUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      uid: '7',
      name: 'Frank Miller',
      status: '🎸 Jamming on the guitar. Rock on!',
      imgUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
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
        <ScrollView horizontal style={styles.storiesList}>
          {contacts.map(item => (
            <StoriesIcon key={item?.uid} props={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesDiv: {
    paddingLeft: 15,
  },
  storiesList:{
  }
});

export default Main;
