import { useQuery } from '@tanstack/react-query';
import { View, Text, FlatList } from 'react-native'
import { getAllDeliveryPoints } from '../../../../actions/deliveryPoint/get-all-delivery-points';
import DeliveryPointCard from '../components/DeliveryPointCard';
import ErrorScreen from '../../../shared/components/ui/ErrorScreen';
import SkeletonCard from '../../../shared/components/ui/SkeletonCard';
import NoticeScreen from '../../../shared/components/ui/NoticeScreen';
import { useCallback, useState } from 'react';
import { ThemedView } from '../../../shared/components/ui/ThemedView';
const DeliveryPointsScreen = () => {

  const { data: deliveryPoints, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['AllDeliveryPointsSettings'],
    queryFn: getAllDeliveryPoints,
  });

  const [refreshing, setRefreshing] = useState(false);

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
        message={error.message ?? 'Error inesperado'}
      />
    )
  }

  return (
    <ThemedView>

      <FlatList
        data={deliveryPoints}
        contentContainerStyle={{ paddingHorizontal: 30, gap: 30 }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={
          ({ item }) => <DeliveryPointCard deliveryPoint={item} onPress={() => { }} />
        }
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 40 }}
        ListEmptyComponent={
          isLoading ?
            <SkeletonCard /> :
            <NoticeScreen title='Sin puntos de entrega' />
        }
      />
    </ThemedView>
  )
}
export default DeliveryPointsScreen


