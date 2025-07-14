import { View, Text, Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { DeliveryPointOrderResponse } from '../../../../infrastructure/interfaces/DeliveryPoint.response';
import CustomText from '../../../shared/components/ui/CustomText';
import MapView, { Marker } from 'react-native-maps';

interface Props {
    deliveryPoint: DeliveryPointOrderResponse;
    onPress?: () => void;
}



const DeliveryPointCard = ({ deliveryPoint, onPress }: Props) => {
    return (
        <View
            // onPress={() => onPress?.()}
            // style={({ pressed }) => [
            //     { opacity: pressed ? 0.5 : 1 },
            //     styles.card,
            //     deliveryPoint.is_active ?  styles.cardOpen : styles.cardClosed,
            // ]}
            style = {[
                styles.card,
                deliveryPoint.is_active ?  styles.cardOpen : styles.cardClosed,
            ]}
        >
            <NativeCardHeader nombre={deliveryPoint.name}  />

            <View style={styles.infoView}>
                <Text>Nombre:</Text>
                <Text>{deliveryPoint.name}</Text>
            </View>
            {/* <View style={[styles.infoView, { backgroundColor: theme['color-info-transparent-100']}]}> */}
            {/* <View style={[styles.infoView, { }]}>
                <Text>Latitud:</Text>
                <Text>{deliveryPoint.latitude}</Text>
            </View>
            <View style={styles.infoView}>
                <Text>Longitud:</Text>
                <Text>{deliveryPoint.longitude}</Text>
            </View> */}
            <View style={[styles.infoView, { }]}>
            {/* <View style={[styles.infoView, { backgroundColor: theme['color-info-transparent-100']}]}> */}
                <Text>Estado:</Text>
                <Text>{deliveryPoint.is_active ? 'Activo': 'Inactivo'}</Text>
            </View>

            <MapView
        style={styles.map}
        initialRegion={{
          latitude: deliveryPoint.latitude,
          longitude: deliveryPoint.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude: deliveryPoint.latitude, longitude: deliveryPoint.longitude }}
          title="Principal Ingenieria"
        />
      </MapView>
        </View>
    )
}
export default DeliveryPointCard

export const NativeCardHeader = ({nombre, haederStyle}: {nombre: string, haederStyle?: StyleProp<ViewStyle>}) =>( 
    <View style = {[styles.header, haederStyle]}>
        <CustomText category='h4' style = { styles.headerText} >{nombre}</CustomText>
    </View>)



const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        borderRadius: 5,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderRightColor: 'rgba(0,0,0,0.1)',
    },
    infoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 10
    },
    cardOpen: {
        // borderLeftColor: '#00E096',
        borderTopColor: '#00E096',
        borderTopWidth: 4,
    },
    cardClosed: {
        borderTopColor: '#FF3D71',
        borderTopWidth: 4,
    },
    header: {
        borderBottomWidth: 1, 
        borderBottomColor: 'rgba(0,0,0,0.07)',
        padding: 10
    },
    headerText: {
        marginLeft: 10
    },
     container: {
    // flex: 1,
    height: '50%',
    // width: 500
  },
  map: {
    // flex: 1,
    height: 300,
    width: '100%'

  },

})

// const style = StyleSheet.create({
//     card: {
//         marginTop: 20,
//     // padding: 15,
//     borderRadius: 5,
//     elevation: 0,
//     // borderLeftWidth: 1,
//     // borderBottomWidth: 1,
//     // borderRightWidth: 1,
//     // borderLeftColor: 'rgba(0,0,0,0.1)',
//     // borderBottomColor: 'rgba(0,0,0,0.1)',
//     // borderRightColor: 'rgba(0,0,0,0.1)',
//     borderWidth: 1,
//     borderColor: 'rgba(0,0,0,0.1)',
    
//     backgroundColor: '#fff',
//     },
    
//     infoText: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 10,
//         padding: 10

//     },
    
// })