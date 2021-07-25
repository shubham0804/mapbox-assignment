import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

const Popup = ({landmark}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* Lankmark Image */}
        <Image
          source={{uri: landmark.images[0].url}}
          style={styles.image}
          // resizeMode="contain"
        />
        <View style={styles.dataContainer}>
          {/* Lankmark Name */}
          <Text style={styles.nameText}>{landmark.name}</Text>
          {/* Landmark Location */}
          <View style={styles.locationContainer}>
            <Icon name="location" size={16} color="black" />
            <Text style={styles.locationText}>
              {landmark.city}, {landmark.country}
            </Text>
          </View>
          {/* Landmark Description */}
          <Text style={styles.descriptionText}>{landmark.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  container: {
    height: 115,
    width: '100%',
    backgroundColor: 'white',
  },
  dataContainer: {
    flex: 3,
    marginLeft: 20,
  },
  descriptionText: {
    fontSize: RFValue(12),
  },
  image: {
    flex: 1.5,
    borderRadius: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontStyle: 'italic',
    fontSize: RFValue(16),
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: RFValue(17),
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    marginHorizontal: 10,
  },
});
