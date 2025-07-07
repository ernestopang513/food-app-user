import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import MenuScreen from '../presentation/screens/MenuScreen';
import PlatilloScreen from '../presentation/screens/PlatilloScreen';

export type StackParamsMenu = {
    Platillos: undefined;
    Platillo: undefined;
}

const StackMenu = createStackNavigator<StackParamsMenu>();

const MenuStackNavigation = () => {
  return (
    <StackMenu.Navigator>
      <StackMenu.Screen name = 'Platillos' component={MenuScreen} />
      <StackMenu.Screen name = 'Platillo' component={PlatilloScreen} />
    </StackMenu.Navigator>
  )
}
export default MenuStackNavigation