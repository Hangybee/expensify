import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/empltyList'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../components/backButton'
import ExpenseCard from '../components/expenseCard'
const TripExpensesScreen = (props) => {
    console.log('props', props.route.params)
    const { id, place, country } = props.route.params
    const navigation = useNavigation()
    const items = [
        {
            id: 1,
            title: 'ate sandwich',
            amount: 4,
            category: 'food'
        },
        {
            id: 2,
            title: 'bought jacket',
            amount: 50,
            category: 'shopping'
        },
        {
            id: 3,
            title: 'watched a movie',
            amount: 100,
            category: 'entertainment'
        },
    ]
    return (
        <ScreenWrapper className='flex-1'>
            <View className="flex justify-between  mx-4">
                <View className=" top-0 left-0 flex-row">
                    <BackButton />
                    <View style={{marginLeft:140}}>
                        <Text className={`${colors.heading} text-xl font-bold text-center`}>{place}</Text>
                        <Text className={`${colors.heading} text-xs text-center`}>{country}</Text>
                    </View>
                </View>

            </View>
            <View style={{ alignItems: 'center', marginHorizontal: 10, borderRadius: 20, marginTop: 5 }}>
                <Image source={require('../assets/images/7.png')} className='w-80 h-80' />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginVertical: 10 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Expenses</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddExpense')}
                    style={{ backgroundColor: 'white', padding: 4, borderRadius: 10, paddingHorizontal: 10 }}>
                    <Text style={{ color: 'gray', fontWeight: '500' }}>Add Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 430 }}>
                <FlatList
                    data={items}
                    scrollEnabled={true}
                    ListEmptyComponent={<EmptyList message="You haven't recorded any expenses yet" />}
                    keyExtractor={items.id}
                    renderItem={({ item }) => {
                        return (
                            <ExpenseCard item={item} />
                        )
                    }}
                />
            </View>
        </ScreenWrapper>
    )
}

export default TripExpensesScreen