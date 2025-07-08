import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import BottomTabNavigation from './root/main/BottomTabNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCLient = new QueryClient();

const FoopAppUser = () => {
    return (

        <QueryClientProvider client={queryCLient}>

        <SafeAreaProvider>

        <NavigationContainer>
            <BottomTabNavigation/>
        </NavigationContainer>
        </SafeAreaProvider>
        </QueryClientProvider>
    )
}
export default FoopAppUser