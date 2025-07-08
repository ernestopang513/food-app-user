import { View, Text, Pressable, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from 'react-native'
import { DishImagesResponse } from '../../../../infrastructure/interfaces/DishImages.response';
import DishImage from './DishImage';

interface Props {
    dish: DishImagesResponse;
    onPress?: () => void;
}

const DishCard = ({dish, onPress, }: Props) => {
  return (
    <>
{/* 
        <FlatList
            data={dish.images}
            // style = {{backgroundColor: 'blue' }}
            contentContainerStyle = {{gap: 5}}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({item}) => <DishImage dishId={item.id} dishUrl={item.url_image} />}
            horizontal
            /> */}


        <Pressable
            onPress={() => onPress?.()}
            style = {({pressed})=> [
                {
                    opacity: pressed? 0.9: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'blue'
                },
            ]}
            >
                <DishImage dishUrl={dish.image?.url_image} />
        <Text style ={{textAlign: 'center', fontWeight: 'bold'}}>{dish.name}</Text>
    </Pressable>
            </>
  )
}
export default DishCard


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        // objectFit: 'scale-down',
        // elevation: 25,
        // opacity: 1,
        // width: 300,
        // height: 400,
        // marginHorizontal: 20,
        
        // display: 'none'
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    }
})