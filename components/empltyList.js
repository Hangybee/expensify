import { View, Text, Image } from 'react-native'
import React from 'react'

const EmptyList = ({message}) => {
  return (
    <View className="justify-center items-center mt-10" >
        <Image source={require('../assets/images/empty.png')} style={{height:150, width:150}} />
      <Text className='font-bold text-gray-400'>{message|| 'data not found'}</Text>
    </View>
  )
}

export default EmptyList