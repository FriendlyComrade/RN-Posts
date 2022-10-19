import React from 'react'
import {StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CreateScreen from '../../views/CreateScreen'
import {HeaderTabNavigationOptions} from '../options/HeaderTabNavigation'

const Create = createNativeStackNavigator()

const CreateNavigator = () => {
  return (
    <Create.Navigator screenOptions={HeaderTabNavigationOptions}>
      <Create.Screen name='CreateScreen' component={CreateScreen} />
    </Create.Navigator>
  )
}

const styles = StyleSheet.create({})

export default CreateNavigator
