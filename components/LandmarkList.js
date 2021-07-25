import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const LocationsList = ({landmarks, setStates}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setStates.setActiveLandmark(item);
        setStates.setCenterCoordinate(item.location);
        setStates.setAnimationMode('moveTo');
      }}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Explore */}
      <View style={styles.exploreContainer}>
        <Icon name="explore" color="black" size={22} />
        <Text style={styles.exploreText}>Explore</Text>
      </View>
      {/* Landmark List */}
      <FlatList
        horizontal={true}
        data={landmarks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{marginHorizontal: 12}} />}
        contentContainerStyle={{paddingHorizontal: 10}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default LocationsList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  exploreContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreText: {
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize: 17,
  },
  text: {
    fontSize: 17,
  },
});
