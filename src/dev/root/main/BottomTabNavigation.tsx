import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import ProfileScreen from '../../ProfileScreen';
import HomeScreen from '../../HomeScreen';
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

            if (route.name === 'Home') {
              iconName = focused ? 'storefront' : 'storefront-outline';
            } else if (route.name === 'Ordenes') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'Ajustes') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3366ff',
          tabBarInactiveTintColor: '#8F9BB3'
            })}}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Ordenes" component={ProfileScreen} />
            <Tab.Screen name="Ajustes" component={ProfileScreen} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigation