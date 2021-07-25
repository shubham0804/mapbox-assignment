import React from 'react';
import {StyleSheet, View, Pressable, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const marker = ({landmark, setActiveLandmark, activeLandmark}) => {
  return (
    <View>
      <MapboxGL.MarkerView
        coordinate={[landmark.location.longitude, landmark.location.latitude]}
        anchor={{x: 0, y: 0}}>
        <Pressable onPress={() => setActiveLandmark(landmark)}>
          <Image
            style={
              activeLandmark?.name !== landmark.name
                ? {width: 30, height: 30}
                : {width: 40, height: 40}
            }
            source={
              activeLandmark?.name !== landmark.name
                ? {
                    uri: 'https://image.flaticon.com/icons/png/512/684/684908.png',
                  }
                : {
                    uri: 'https://image.flaticon.com/icons/png/512/3237/3237510.png',
                  }
            }
          />
        </Pressable>
      </MapboxGL.MarkerView>
    </View>
  );
};

export default marker;
