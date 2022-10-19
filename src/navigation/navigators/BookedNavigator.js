import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {StyleSheet} from 'react-native'
import BookedScreen from '../../views/BookedScreen'
import PostScreen from '../../views/PostScreen'
import {HeaderTabNavigationOptions} from '../options/HeaderTabNavigation'


const Booked = createStackNavigator()

const BookedNavigator = () => {
  return (
    <Booked.Navigator
      screenOptions={HeaderTabNavigationOptions}
      initialRouteName='BookedScreen'
    >
      <Booked.Screen name='BookedScreen' component={BookedScreen} />
      <Booked.Screen name='PostScreen' component={PostScreen} />
    </Booked.Navigator>
  )
}

const styles = StyleSheet.create({})

export default BookedNavigator
