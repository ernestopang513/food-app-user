import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text , StyleSheet} from 'react-native'
import ProfileScreen from '../../dev/ProfileScreen';
import HomeScreen from '../../dev/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
type IoniconName = keyof typeof Ionicons.glyphMap;
const BottomTabNavigation = () => {

  const insents = useSafeAreaInsets();

    return (
        <Tab.Navigator
        
            screenOptions={({route}) => {
                return({
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
          tabBarActiveTintColor: '#3366ff',
          tabBarInactiveTintColor: '#8F9BB3',
          tabBarStyle: {
            backgroundColor: '#E4E9F2',
                    // borderTopWidth: 1
                    // elevation: 8            
                    height: 60 + insents.bottom, // Aumenta la altura
                    // paddingBottom: insents.bottom > 0 ? insents.bottom : 20, // Ajusta el espacio inferior
                    paddingTop: 5,
                    // paddingBottom: 10
                  },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '900'
          }
            })}}
        >
            <Tab.Screen name="Menú" component={HomeScreen} />
            <Tab.Screen name="Puntos" component={ProfileScreen} />
            <Tab.Screen name="Ordenes" component={ProfileScreen} />
            <Tab.Screen name="Locales" component={ProfileScreen} />
            <Tab.Screen name="Ajustes" component={ProfileScreen} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigation

