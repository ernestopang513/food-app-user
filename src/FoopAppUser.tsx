import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import BottomTabNavigation from './root/main/BottomTabNavigation'
const FoopAppUser = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigation/>
        </NavigationContainer>
    )
}
export default FoopAppUser