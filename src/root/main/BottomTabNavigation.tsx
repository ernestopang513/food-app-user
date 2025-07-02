import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text , StyleSheet} from 'react-native'
import ProfileScreen from '../../dev/ProfileScreen';
import HomeScreen from '../../dev/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
type IoniconName = keyof typeof Ionicons.glyphMap;
const BottomTabNavigation = () => {


    return (
        <Tab.Navigator
        
            screenOptions={({route}) => {
                return({
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ focused, color, size }) => {
            let iconName: IoniconName = 'help-outline';

            if (route.name === 'Inicio') {
              iconName = focused ? 'storefront' : 'storefront-outline';
            } else if (route.name === 'Ordenes') {
              iconName = focused ? 'reader' : 'reader-outline';
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
            
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '900'
          }
            })}}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Ordenes" component={ProfileScreen} />
            <Tab.Screen name="Ajustes" component={ProfileScreen} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigation

