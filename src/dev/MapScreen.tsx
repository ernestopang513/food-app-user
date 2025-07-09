import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.33125638836458,
          longitude: -99.18388852822785,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        <Marker
          coordinate={{ latitude: 19.33125638836458, longitude: -99.18388852822785 }}
          title="Principal Ingenieria"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '50%',
    // width: 500
  },
  map: {
    flex: 1,
  },
});
