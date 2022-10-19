import React from 'react'
import {StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AboutScreen from '../../views/AboutScreen'
import {HeaderTabNavigationOptions} from '../options/HeaderTabNavigation'

const About = createNativeStackNavigator()

const AboutNavigator = () => {
  return (
    <About.Navigator screenOptions={HeaderTabNavigationOptions}>
      <About.Screen name='AboutScreen' component={AboutScreen} />
    </About.Navigator>
  )
}

const styles = StyleSheet.create({})

export default AboutNavigator
