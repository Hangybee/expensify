import { View, Text } from 'react-native'
import React from 'react'
import { categoryBG, colors } from '../theme'

const ExpenseCard = ({item}) => {
    console.log('ssssss', item)
  return (
    <View style={{backgroundColor:categoryBG[item.category]}} className="flex-row justify-between item-center p-3 px-5 mb-3 rounded-2xl mx-4">
      <View>
        <Text className={`${colors.heading} font-bold text-black`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs text-black`}>{item.category}</Text>
      </View>
      <View>
        <Text className='text-black'>${item.amount}</Text>
      </View>
    </View>
  )
}

export default ExpenseCard