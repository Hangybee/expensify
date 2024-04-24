import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const WelcomeScreen = () => {
    const { user } = useSelector(state => state.user)
    console.log('maaaaaayank', user)
    const navigation = useNavigation()
    return (
        <ScreenWrapper>
            <View>
                <View className='flex-row justify-center mt-10'>
                    <Image source={require('../assets/images/10.png')} className='h-96 w-96 ' alt='hello' />
                </View>
                <View className='mx-5 mb-20'>
                    <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>Expensify</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signin')} className='p-3 mb-3 rounded-full elevation' style={{backgroundColor:colors.button}}>
                        <Text className='text-center text-white text-lg font-bold'>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')} className='p-3 rounded-full elevation' style={{backgroundColor:colors.button}}>
                        <Text className='text-center text-white text-lg font-bold'>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default WelcomeScreen