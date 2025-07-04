import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import MenuScreen from '../presentation/screens/MenuScreen';

export type StackParamsMenu = {
    Platillos: undefined;
}

const StackMenu = createStackNavigator<StackParamsMenu>();

const MenuStackNavigation = () => {
  return (
    <StackMenu.Navigator>
      <StackMenu.Screen name = 'Platillos' component={MenuScreen} />
    </StackMenu.Navigator>
  )
}
export default MenuStackNavigation