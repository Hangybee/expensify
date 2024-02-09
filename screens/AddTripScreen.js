import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'

const AddTripScreen = () => {
  return (
    <ScreenWrapper>
    <View>
      <View>
        <BackButton />
        <Text style={{color:'black'}}>Add Trip </Text>
      </View>
    </View>
    </ScreenWrapper>
  )
}

export default AddTripScreen