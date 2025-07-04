import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import BottomTabNavigation from './root/main/BottomTabNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const FoopAppUser = () => {
    return (
        <SafeAreaProvider>

        <NavigationContainer>
            <BottomTabNavigation/>
        </NavigationContainer>
        </SafeAreaProvider>
    )
}
export default FoopAppUser