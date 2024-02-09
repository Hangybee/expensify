import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/empltyList'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
    const navigation = useNavigation()
    const items = [
        {
            id: 1,
            place: 'Agra',
            country: 'India'
        },
        {
            id: 2,
            place: 'Kerla',
            country: 'India'
        },
        {
            id: 3,
            place: 'Mumbai',
            country: 'India'
        },
        {
            id: 4,
            place: 'Delhi',
            country: 'India'
        },
        {
            id: 4,
            place: 'Delhi',
            country: 'India'
        },
        {
            id: 3,
            place: 'Mumbai',
            country: 'India'
        },
        {
            id: 4,
            place: 'Delhi',
            country: 'India'
        },
        {
            id: 4,
            place: 'Delhi',
            country: 'India'
        },
    ]
    return (
        <ScreenWrapper className='flex-1'>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 4 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25, shadowColor: 'gray' }} >Expensify</Text>
                <TouchableOpacity style={{ padding: 4, paddingHorizontal: 15, backgroundColor: 'white', borderColor: 'gray', borderRadius: 10 }}>
                    <Text style={{ color: 'gray' }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'lightblue', marginHorizontal: 10, borderRadius: 20, marginTop: 5 }}>
                <Image source={require('../assets/images/banner.png')} style={{ height: 200, width: 200 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginVertical:10}}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Recent Trips</Text>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('AddTrip')}
                    style={{ backgroundColor: 'white', padding: 4, borderRadius: 10, paddingHorizontal: 10 }}>
                    <Text style={{ color: 'gray', fontWeight: '500' }}>Add Trip</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 430 }}>
                <FlatList
                    data={items}
                    numColumns={2}
                    scrollEnabled={true}
                    ListEmptyComponent={<EmptyList message="You haven't recorded any trips yet" />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={items.id}
                    columnWrapperStyle={{ justifyContent: 'space-around', marginVertical: 5, flex: 1 }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ backgroundColor: 'white', width: 190, height: 210, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
                                <Image source={randomImage()} style={{ width: 160, height: 140 }} />
                                <Text style={{ color: 'black', fontWeight: '700', marginTop: 10 }}>{item.place}</Text>
                                <Text style={{ color: 'black' }}>{item.country}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ScreenWrapper>
    )
}

export default HomeScreen