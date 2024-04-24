import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()
export default function AppNavigation() {

  const { user } = useSelector(state => state.user)
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name='AddTrip' component={AddTripScreen} />
          <Stack.Screen options={{ headerShown: false }} name='AddExpense' component={AddExpenseScreen} />
          <Stack.Screen options={{ headerShown: false }} name='TripExpense' component={TripExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Welcome' component={WelcomeScreen} />
          <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name='Signin' component={SignInScreen} />
          <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name='Signup' component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}