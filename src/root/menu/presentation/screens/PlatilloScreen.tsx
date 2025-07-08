import { useQuery } from '@tanstack/react-query'
import { View, Text } from 'react-native'
import { getAllDishes } from '../../../../actions/dishes/get-all-dishes'
const PlatilloScreen = () => {

    const {data: dishes, isLoading, isError, error} = useQuery({
        queryKey: ['AllDishesSettings'],
        queryFn: getAllDishes
    })


  return (
    <View>
      <Text>PlatilloScreen</Text>
    </View>
  )
}
export default PlatilloScreen