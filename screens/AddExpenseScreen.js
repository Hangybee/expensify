import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'
import { categories } from '../constants'

const AddExpense = () => {

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  const handleAddExpense = () => {
    if (title && amount && category) {
      //good to go
      navigation.goBack()
    } else {
      //show error
    }
  }
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4 mt-0">
        <View>
          <View className="flex-row mt-0 ">
            <BackButton />
            <Text className='text-xl ml-20 justify-center font-bold text-center text-black'>Add Expense </Text>
          </View>
          <View className='flex-row justify-center my-0 mt-0'>
            <Image className='w-60 h-60' source={require('../assets/images/expenseBanner.png')} />
          </View>
          <View className='space-y-1'>
            <Text className='text-lg font-bold text-black'>For What ?</Text>
            <TextInput value={title} onChangeText={(event) => setTitle(event)} className=' text-black h-12 bg-white rounded-full p-3 mb-0' />
            <Text className='text-lg font-bold text-black'>How much ?</Text>
            <TextInput value={amount} onChangeText={value => setAmount(value)} className='text-black h-12 bg-white rounded-full p-3 mb-0' />
          </View>
        </View>
        <View>
          <Text className='text-black text-lg font-bold mt-1'>Category</Text>
          <View className='flex-row flex-wrap mt-1'>
            {
              categories.map((cat)=>{
                let bgColor = 'bg-white'
                if(cat.value === category) bgColor='bg-green-300'
                return(
                  <TouchableOpacity onPress={()=>setCategory(cat.value)} id={cat.title} className = {`mr-3 p-3 mt-1 mb-1 rounded-full bg-white ${bgColor}`} >
                    <Text className='text-black'>{cat.title}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
        <TouchableOpacity onPress={handleAddExpense} className='bg-green-500 mb-1 rounded-full p-3 shadow-sm mx-2 '>
          <Text className='text-center text-white text-lg font-bold'>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

export default AddExpense