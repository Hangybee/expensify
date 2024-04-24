import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'

const SignInScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const handleSubmit = () => {
    // dispatch(setUser("true"))

    if (email && password) {
      if (email == 'test@gmail.com' && parseInt(password) === 12345) {
        dispatch(setUser("true"))
        console.log('22222222222222222', user)
      }

    } else {
      console.log('Please enter details')
    }
  }
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className='flex-row '>
            <BackButton />
            <Text style={{ marginLeft: 120 }} className='text-xl font-bold text-black '>Sign In</Text>
          </View>
          <View className='flex-row justify-center my-3 mt-5'>
            <Image className='w-72 h-72' source={require('../assets/images/login.png')} />
          </View>
          <View className='space-y-1'>
            <Text className='text-lg font-bold text-black'>Email</Text>
            <TextInput onChangeText={(event) => setEmail(event)} className=' text-black h-12 bg-white rounded-full p-4 mb-3' />
            <Text className='text-lg font-bold text-black'>Password</Text>
            <TextInput secureTextEntry onChangeText={value => setPassword(value)} className='text-black h-12 bg-white rounded-full p-4 mb-3' />
            <TouchableOpacity className='flex-row justify-end'>
              <Text style={{ color: 'gray' }}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleSubmit} className='bg-green-400 my-2 rounded-full p-3 shadow-sm mx-2'>
          <Text className='text-center text-white text-lg font-bold'>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

export default SignInScreen