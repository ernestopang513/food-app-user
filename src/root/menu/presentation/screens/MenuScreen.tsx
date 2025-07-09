import { View, Text, FlatList, Modal, Pressable, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { getAllDishes } from '../../../../actions/dishes/get-all-dishes'
import { useQuery } from '@tanstack/react-query'
import DishCard from '../components/DishCard'
import { StackScreenProps } from '@react-navigation/stack'
import { StackParamsMenu } from '../../route/MenuStackNavigation'
import { useModal } from '../../../main/hooks/useModal'
import { useCallback, useState } from 'react'
import { DishImagesResponse } from '../../../../infrastructure/interfaces/DishImages.response'
import { ThemedView } from '../../../shared/components/ui/ThemedView'
import SkeletonCard from '../../../shared/components/ui/SkeletonCard'
import NoticeScreen from '../../../shared/components/ui/NoticeScreen'
import ErrorScreen from '../../../shared/components/ui/ErrorScreen'

interface Props extends StackScreenProps<StackParamsMenu, 'Platillos'> { }

const MenuScreen = ({ navigation }: Props) => {

  const [selectedDish, setSelectedDish] = useState<DishImagesResponse | null>(null);
    const [refreshing, setRefreshing] = useState(false);


  const { visible, openModal, closeModal } = useModal();


  const { data: dishes, isLoading, isError, error , refetch} = useQuery({
    queryKey: ['AllDishesSettings'],
    queryFn: getAllDishes
  })

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
    // <ThemedView style = {{ flex: 1}}>

    //   <Text>MenuScreen</Text>
    // </ThemedView>
    <ThemedView>
      <FlatList
        data={dishes}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        // style = {{backgroundColor: 'red'}}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 30, gap: 20, paddingBottom: 100 }}
        // renderItem={({ item }) => <DishCard dish={item} onPress={() => navigation.navigate('Platillo', {dishId: item.id}) } />}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            onPress={() => {
              setSelectedDish(item)
              openModal()
            }
            }
          />)}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        ListEmptyComponent={
          isLoading ?
            <SkeletonCard/>:
            <NoticeScreen title='No hay platillos' message='Negocio sin platillos' />
        }
      />

      <Modal
        visible={visible}
        animationType='slide'
        transparent
        statusBarTranslucent
        onRequestClose={() => {
          closeModal();
          setSelectedDish(null)
        }}
      >
        <Pressable
          style={styles.backDrop}
          onPress={() => {
            closeModal();

          }}
        >
          <TouchableWithoutFeedback>
            <ThemedView level={3} style={styles.modalContainer}>

              <View style={{ justifyContent: 'space-between', flex: 1 }}>

                <View>

                  {selectedDish && (
                    <>
                      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedDish.name}</Text>
                      <Text style={{ marginTop: 10 }}>{selectedDish.description}</Text>
                      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>${selectedDish.price}</Text>
                      {/* Podés renderizar aquí la imagen también */}
                    </>
                  )}


                </View>
              </View>
            </ThemedView>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>

    </ThemedView>
  )
}
export default MenuScreen


const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.07)',
    padding: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    paddingVertical: 5
  },
  viewInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#F2F6FF',
    // backgroundColor: 'white',
    marginTop: '140%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12
  },
  backDrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.0)'
  },
  dishButtonSelected: {
    backgroundColor: '#d1ffe1',
  },

})