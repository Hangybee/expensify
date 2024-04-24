import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'
import Snackbar from 'react-native-snackbar';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handleSubmit = async () => {
    if (email && password) {
      //good to go
      // navigation.navigate('Home')
      await createUserWithEmailAndPassword(auth, email, password)
    } else {
     Snackbar.show({
      text: 'Email and Password are required',
      backgroundColor:'red'
     })
    }
  }
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className='flex-row '>
            <BackButton />
            <Text style={{ marginLeft: 120 }} className='text-xl font-bold text-black '>Sign Up</Text>
          </View>
          <View className='flex-row justify-center my-3 mt-5'>
            <Image className='w-72 h-72' source={require('../assets/images/signup.png')} />
          </View>
          <View className='space-y-1'>
            <Text className='text-lg font-bold text-black'>Email</Text>
            <TextInput onChangeText={(event) => setEmail(event)} className=' text-black h-12 bg-white rounded-full p-4 mb-3' />
            <Text className='text-lg font-bold text-black'>Password</Text>
            <TextInput secureTextEntry onChangeText={value => setPassword(value)} className='text-black h-12 bg-white rounded-full p-4 mb-3' />
    
          </View>
        </View>
        <TouchableOpacity onPress={handleSubmit} className='bg-green-400 my-2 rounded-full p-3 shadow-sm mx-2'>
          <Text className='text-center text-white text-lg font-bold'>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

export default SignUpScreen