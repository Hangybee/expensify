import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
const BackButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity  onPress={()=>navigation.goBack()}className="bg-white rounded-full h-8 w-8 justify-center ">        
      <ChevronLeftIcon style={{color:'green'}} size='20' />
    </TouchableOpacity>
  )
}

export default BackButton