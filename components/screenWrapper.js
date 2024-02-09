import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'

const ScreenWrapper = ({children}) => {
    let statusBarHeight = StatusBar.currentHeight? StatusBar.currentHeight: Platform.OS=='ios'?30:0
  return (
    <View style={{paddingTop: statusBarHeight}}>
        {children}
    </View>
  )
}

export default ScreenWrapper