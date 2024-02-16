import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'

const AddTripScreen = () => {

  const [place, setPlace] = useState('')
  const [country, setCountry] = useState('')
  const navigation = useNavigation()

  const handleAddTrip = () => {
    if (place && country) {
      //good to go
      navigation.navigate('Home')
    } else {
      //show error
    }
  }
  useEffect(() => {
    console.log('mayankkk', place)
  }, [place])
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className='flex-row '>
            <BackButton />
            <Text style={{marginLeft:120}} className='text-xl font-bold text-black '>Add Trip </Text>
          </View>
          <View className='flex-row justify-center my-3 mt-5'>
            <Image className='w-72 h-72' source={require('../assets/images/4.png')} />
          </View>
          <View className='space-y-2'>
            <Text className='text-lg font-bold text-black'>Where On Earth ?</Text>
            <TextInput onChangeText={(event) => setPlace(event)} className=' text-black h-12 bg-white rounded-full p-4 mb-3' />
            <Text className='text-lg font-bold text-black'>Which Country</Text>
            <TextInput onChangeText={value => setCountry(value)} className='text-black h-12 bg-white rounded-full p-4 mb-3' />
          </View>
        </View>
        <TouchableOpacity onPress={handleAddTrip} className='bg-green-400 my-6 rounded-full p-3 shadow-sm mx-2'>
          <Text className='text-center text-white text-lg font-bold'>Add Trip</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

export default AddTripScreen