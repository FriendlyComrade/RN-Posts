import {StyleSheet, Platform} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import {THEME} from '../../theme'
import StackNavigator from './StackNavigator'
import BookedNavigator from './BookedNavigator'
import {useEffect} from 'react'

const BottomTab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      barStyle={
        Platform.OS === 'android' ? {backgroundColor: THEME.MAIN_COLOR} : {}
      }
      shifting={true}
    >
      <BottomTab.Screen
        name='Post'
        children={() => <StackNavigator />}
        options={{
          tabBarLabel: 'Все',
          tabBarActiveTintColor:
            Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
          tabBarIcon: info => (
            <Ionicons name='ios-albums' size={25} color={info.color} />
          )
        }}
      />
      <BottomTab.Screen
        name='Booked'
        children={() => <BookedNavigator />}
        options={{
          tabBarLabel: 'Избранное',
          tabBarActiveTintColor:
            Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
          tabBarIcon: info => (
            <Ionicons name='ios-star' size={25} color={info.color} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default BottomTabNavigator
