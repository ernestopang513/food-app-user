import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import FoodStandScreen from '../screens/FoodStandScreen';
import FoodMapScreen from '../screens/FoodMapScreen';

export type StackParamsFoodStand = {
    FoodStands: undefined;
    FoodStandMap: {latitude: number, longitude: number};
 
}

const StackFoodStand = createStackNavigator<StackParamsFoodStand>();

const FoodStackNavigation = () => {
  return (
    <StackFoodStand.Navigator>
      <StackFoodStand.Screen name = 'FoodStands' component={FoodStandScreen} />
      <StackFoodStand.Screen name = 'FoodStandMap' component={FoodMapScreen} />
     
    </StackFoodStand.Navigator>
  )
}
export default FoodStackNavigation