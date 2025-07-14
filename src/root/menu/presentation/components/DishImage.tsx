import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import { DishImagesResponse } from '../../../../infrastructure/interfaces/DishImages.response';
import { FadeInImage } from '../../../shared/components/ui/FadeInImage';

interface Props {
    dishUrl: string;
    onPress?: (dishId: string) => void;
    width?: number;
    height?: number;
}

const DishImage = ({ dishUrl, onPress, width = 200, height = 200 }: Props) => {
    return (
        // <Pressable
        //     onPress={() => onPress?.(dishId)}
        //     style = {({pressed})=> [
        //         {
        //             width,
        //             height,
        //             opacity: pressed? 0.5: 1,

        //         },
        //     ]}
        // >
        <View style={[{ ...styles.imageContainer, width, height }]}>
            {
                dishUrl === undefined
                    ? <Image
                        source={require("../../../../../assets/no-product-image.png")}
                        style={styles.image}
                    />


                    : <FadeInImage
                        uri={  dishUrl}
                        style={{width, height}}
                    />
            }
           
            {/* <Image
                source={
                    dishUrl === undefined
                        ? require("../../../../../assets/no-product-image.png")
                        : { uri: dishUrl }
                }
                style={styles.image}
                resizeMode="cover" // 'cover' o 'contain' según prefieras
            /> */}
        </View>
        // </Pressable>
    )
}
export default DishImage


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
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
        // flex: 1,
        // borderRadius: 18,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.24,
        // shadowRadius: 7,
        // elevation: 9,
        overflow: 'hidden',

        justifyContent: 'center',
        alignItems: 'center'
    }
})