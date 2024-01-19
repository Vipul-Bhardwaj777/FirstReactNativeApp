import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ImgCard from '../Components/ImgCard';
import urls from '../config/urls';

const Cards = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>FlatCards</Text>
          </View>
          <ScrollView horizontal={true} style={styles.cardsContainer}>
            <View style={[styles.card, styles.redCard]}>
              <Text style={{color: '#ffffff'}}>RED</Text>
            </View>
            <View style={[styles.card, styles.greenCard]}>
              <Text style={{color: '#ffffff'}}>GREEN</Text>
            </View>
            <View style={[styles.card, styles.blueCard]}>
              <Text style={{color: '#ffffff'}}>BLUE</Text>
            </View>
            <View style={[styles.card, styles.redCard]}>
              <Text style={{color: '#ffffff'}}>RED</Text>
            </View>
            <View style={[styles.card, styles.greenCard]}>
              <Text style={{color: '#ffffff'}}>GREEN</Text>
            </View>
            <View style={[styles.card, styles.blueCard]}>
              <Text style={{color: '#ffffff'}}>BLUE</Text>
            </View>
          </ScrollView>

          <ImgCard
            imgAddress={urls?.imgCardUrls?.firstCard}
            addressFirst={'3 BHK, Chandigarh'}
            addressSecond={'Sector 18, Panchkkula'}
            description={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloreasperiores maxime nobis perspiciatis cumque, necessitatibus rationeunde, rem vel deserunt aut deleniti et expedita quos quae, adarchitecto sunt corrupti'
            }
          />
          <ImgCard
            imgAddress={urls?.imgCardUrls?.secondCard}
            addressFirst={'3 BHK, Chandigarh'}
            addressSecond={'Sector 18, Panchkkula'}
            description={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloreasperiores maxime nobis perspiciatis cumque, necessitatibus rationeunde, rem vel deserunt aut deleniti et expedita quos quae, adarchitecto sunt corrupti'
            }
          />
          <ImgCard
            imgAddress={urls?.imgCardUrls?.thirdCard}
            addressFirst={'3 BHK, Chandigarh'}
            addressSecond={'Sector 18, Panchkkula'}
            description={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloreasperiores maxime nobis perspiciatis cumque, necessitatibus rationeunde, rem vel deserunt aut deleniti et expedita quos quae, adarchitecto sunt corrupti'
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 15,
  },
  heading: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardsContainer: {
    // padding: 5,
    marginBottom: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  redCard: {
    backgroundColor: '#be123c',
  },
  greenCard: {
    backgroundColor: '#059669',
  },
  blueCard: {
    backgroundColor: '#60a5fa',
  },
});

export default Cards;
