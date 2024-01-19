import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import urls from '../config/urls';

const ImgCard = ({imgAddress, addressFirst, addressSecond, description}) => {
  const openDesc = link => {
    Linking.openURL(link);
  };
  const openContact = link => {
    Linking.openURL(link);
  };
  return (
    <View>
      <View style={styles.imgCardContainer}>
        <Image
          source={{
            uri: imgAddress,
          }}
          style={styles.cardImg}
        />
        <View style={styles.cardBody}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>{addressFirst}</Text>
          <Text style={{fontWeight: '500'}}>{addressSecond}</Text>
          <Text style={{}}>{description}</Text>
        </View>

        <View style={styles.cardBtns}>
          <TouchableOpacity>
            <Text
              style={styles.btnCard}
              onPress={() => openDesc(urls?.imgCardBtnUrls?.seeMore)}>
              See More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btnCard}
              onPress={() => openContact(urls?.imgCardBtnUrls?.contactMe)}>
              Contact Me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgCardContainer: {
    margin: 10,
    marginLeft: 0,
    paddingLeft: 0,
    backgroundColor: '#d4d4d8',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    gap: 5,
    elevation: 5,
  },
  cardImg: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
  },
  cardBody: {
    gap: 5,
    padding: 5,
    color: '#000000',
  },
  cardBtns: {
    flexDirection: 'row',
    margin: 5,
    marginBottom: 10,
    gap: 10,
  },
  btnCard: {
    backgroundColor: '#404040',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
  },
});
export default ImgCard;
