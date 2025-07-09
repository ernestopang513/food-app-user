import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StackParamsFoodStand } from '../router/FoodStackNavigation';

interface Props extends StackScreenProps<StackParamsFoodStand, 'FoodStandMap'> {}

const FoodMapScreen = ({ route }: Props) => {
  const { latitude, longitude } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialCamera={{
          center: {
            latitude,
            longitude,
          },
          pitch: 0,
          heading: 0,
          altitude: 100, // más bajo = más cercano
          zoom: 18,       // zoom alto = más cercano (rango recomendado: 15–20)
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="Principal Ingenieria"
        />
      </MapView>
    </View>
  );
};

export default FoodMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
