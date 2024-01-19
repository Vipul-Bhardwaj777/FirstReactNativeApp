import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ImgCard from '../Components/ImgCard';
import urls from '../config/urls';
import SmallCard from '../Components/SmallCard';

const Cards = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>See Properties</Text>
          </View>
          <ScrollView horizontal={true} style={styles.cardsContainer}>
            <SmallCard img={urls?.smallCardUrls?.a} />
            <SmallCard img={urls?.smallCardUrls?.b} />
            <SmallCard img={urls?.smallCardUrls?.c} />
            <SmallCard img={urls?.smallCardUrls?.d} />
            <SmallCard img={urls?.smallCardUrls?.e} />
            <SmallCard img={urls?.smallCardUrls?.f} />
          </ScrollView>

          <Text style={styles.heading}>Browse Homes</Text>

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
    color:'#000'
  },
  cardsContainer: {
    marginBottom: 20,
  },
});

export default Cards;
