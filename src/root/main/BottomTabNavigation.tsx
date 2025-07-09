import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native'
import ProfileScreen from '../../dev/ProfileScreen';
import HomeScreen from '../../dev/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MenuStackNavigation from '../menu/route/MenuStackNavigation';
import { useThemeStore } from '../../store/useThemeStore';
import MapScreen from '../../dev/MapScreen';
import DeliveryPointsScreen from '../points/presentation/screens/DeliveryPointsScreen';
import FoodStandScreen from '../foodStands/presentation/screens/FoodStandScreen';
import FoodStackNavigation from '../foodStands/presentation/router/FoodStackNavigation';
import ErrorScreen from '../shared/components/ui/ErrorScreen';
import NoticeScreen from '../shared/components/ui/NoticeScreen';
const Tab = createBottomTabNavigator();
type IoniconName = keyof typeof Ionicons.glyphMap;
const BottomTabNavigation = () => {

  const insents = useSafeAreaInsets();
  const activeColor = useThemeStore(state => state.theme.primary['500'])
  return (
    <Tab.Navigator

      screenOptions={({ route }) => {
        return ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IoniconName = 'help-outline';

            if (route.name === 'Menú') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Puntos') {
              iconName = focused ? 'bicycle' : 'bicycle-outline';
            } else if (route.name === 'Ordenes') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'Locales') {
              iconName = focused ? 'storefront' : 'storefront-outline';
            } else if (route.name === 'Ajustes') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: '#8F9BB3',
          tabBarStyle: {
            backgroundColor: '#E4E9F2',
            height: 65 + insents.bottom, // Aumenta la altura
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '900',
          },
          headerShown: true,
        })
      }}
    >
      <Tab.Screen name="Menú" component={MenuStackNavigation} options={{headerShown: false}} />
      <Tab.Screen name="Puntos" component={DeliveryPointsScreen} />
      <Tab.Screen name="Ordenes" component={HomeScreen} />
      <Tab.Screen name="Locales" component={FoodStackNavigation} options={{headerShown: false}} />
      <Tab.Screen name="Ajustes" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
export default BottomTabNavigation

