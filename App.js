import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Marker from './components/Marker';
import landmarks from './landmarks.json';
import Popup from './components/Popup';
import LandmarkList from './components/LandmarkList';

MapboxGL.setAccessToken('access token');

export default () => {
  const [activeLandmark, setActiveLandmark] = useState({});
  const [centerCoordinate, setCenterCoordinate] = useState(
    landmarks.data.allLandmarks[1].location,
  );
  const [animationMode, setAnimationMode] = useState('easeTo');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {/* Locations List */}
        <LandmarkList
          landmarks={landmarks.data.allLandmarks}
          setStates={{
            setActiveLandmark,
            setCenterCoordinate,
            setAnimationMode,
          }}
        />
        {/* Map */}
        <MapboxGL.MapView style={styles.map} zoomEnabled={true}>
          <MapboxGL.Camera
            zoomLevel={11}
            animationMode={animationMode}
            centerCoordinate={[
              centerCoordinate.longitude,
              centerCoordinate.latitude,
            ]}
          />
          {landmarks.data.allLandmarks.map(landmark => {
            return (
              <Marker
                key={landmark.name}
                landmark={landmark}
                setActiveLandmark={setActiveLandmark}
                activeLandmark={activeLandmark}
              />
            );
          })}
        </MapboxGL.MapView>
        {/* Popup */}
        {Object.keys(activeLandmark).length > 0 && (
          <Popup landmark={activeLandmark} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});
