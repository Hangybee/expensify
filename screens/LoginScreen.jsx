import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'

const LoginScreen = () => {
    return (
        <View>
            <ScreenWrapper>
                <Text style={{ color: 'blue' }}>LoginScreen</Text>
            </ScreenWrapper>
        </View>
    )
}

export default LoginScreen