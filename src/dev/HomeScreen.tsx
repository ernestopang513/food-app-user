import { View, Text, Keyboard, TextInput, TextInputBase, Image, ScrollView, Alert } from 'react-native'
import { CustomInput } from './CustomInput'
import { Ionicons } from '@expo/vector-icons'
import {  CustomInput3 } from './CustomIcon2'
import ThemedTextInput from './ThemeTextInput'
import CustomButton from '../root/shared/components/ui/CustomButton'
const HomeScreen = () => {
  return (
    <ScrollView
     style = {{flex: 1}}
    >

    <View style = {{paddingHorizontal: 20, paddingTop: 30, backgroundColor: 'white', flex: 1}}>
      <Text>HomeScreenn</Text>

      <CustomButton
        title ="Hola"
        status='success'
        appearance='filled'
        loading = {false}
        onPress={() => Alert.alert("Título", "Mensaje", [
  { text: "Cancelar", style: "cancel" },
  { text: "Aceptar", onPress: () => console.log("OK") }
])}
      />

      <CustomInput
        label = "Email"
        placeholder='Ingresa tu correo'
        onBlur={()=> console.log('onBlur')}
        error = {'Error garrafal'}
        />
      <CustomInput
        label = "Campo"
        placeholder='Ingresa tu correo'
        onBlur={()=> console.log('onBlur')}
        // error = {'Error garrafal'}
        />

      <CustomInput3
        label = 'Campo 2'
        accessoryLeft= {<Ionicons name='mail-outline' size={30} color={"#888"} />}
        />

      <ThemedTextInput
        icon='mail-outline'
        placeholder='Ingresa tu correo'
        label = 'Email'
        error = {'Error'}
        />
      <CustomInput
        label = "Email"
        placeholder='Ingresa tu correo'
        onBlur={()=> console.log('onBlur')}
        error = {'Error garrafal'}
        />
      <CustomInput
        label = "Campo"
        placeholder='Ingresa tu correo'
        onBlur={()=> console.log('onBlur')}
        // error = {'Error garrafal'}
        />

      <CustomInput3
        label = 'Campo 2'
        accessoryLeft= {<Ionicons name='mail-outline' size={30} color={"#888"} />}
        />

      <ThemedTextInput
        icon='mail-outline'
        placeholder='Ingresa tu correo'
        label = 'Email'
        error = {'Error'}
        />

      {/* <TextInputBase/> */}
        <View style = {{marginVertical: 40}} />
      <View>

       <Image
        source={{ uri: 'https://drive.google.com/uc?export=view&id=1Phq4_65isbhM7JI9znesoHIJt3iXN2hk' }}
        style={{ width: 200, height: 200, borderRadius: 10 }}
        resizeMode="cover" // o 'contain', 'stretch', etc.
        />

        <View style = {{marginVertical: 40}} />

        </View>
    </View>
        </ScrollView>
  )
}
export default HomeScreen