import { useQuery } from '@tanstack/react-query'
import { View, Text, FlatList } from 'react-native'
import { getAllFoodStands } from '../../../../actions/foodStands/get-all-food-stands'
import NativeFoodStandCard from '../components/FoodStandCard'
import { ThemedView } from '../../../shared/components/ui/ThemedView'
import { StackScreenProps } from '@react-navigation/stack'
import { StackParamsFoodStand } from '../router/FoodStackNavigation'
import SkeletonCard from '../../../shared/components/ui/SkeletonCard'
import NoticeScreen from '../../../shared/components/ui/NoticeScreen'
import ErrorScreen from '../../../shared/components/ui/ErrorScreen'
import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

interface Props extends StackScreenProps<StackParamsFoodStand, 'FoodStands'> {}

const FoodStandScreen = ({navigation}: Props) => {

    const [refreshing, setRefreshing] = useState(false);
    const { data: foodStands, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['foodStandsSettings'],
        queryFn: getAllFoodStands,
        // staleTime: 1000 * 60,
    })

    useFocusEffect(
        useCallback(() => {
            refetch();
        }, [refetch])
    );

    const handleRefresh = useCallback(async () => {
                setRefreshing(true);
                try {
                    await refetch()
                } finally {
                    setRefreshing(false)
                }
            }, [refetch]);


     if (isError) {
      return (
        <ErrorScreen
          message={error.message?? 'Error inesperado'}
        />
      )
    }

    return (
        <ThemedView >

            <FlatList
                data={foodStands}
                refreshing = {refreshing}
                onRefresh={handleRefresh}
                contentContainerStyle={{ paddingHorizontal: 30, gap: 30 }}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                renderItem={({ item }) =>
                    <NativeFoodStandCard
                        foodStand={item}
                    onPress={() => navigation.navigate('FoodStandMap', {latitude: item.latitude, longitude: item.longitude})}
                    />}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{ height: 40 }}
                ListEmptyComponent={
                    isLoading ? 
                    <SkeletonCard/> : 
                    <NoticeScreen title='Sin locales que ver ' />
                }
            />
        </ThemedView>
    )
}
export default FoodStandScreen