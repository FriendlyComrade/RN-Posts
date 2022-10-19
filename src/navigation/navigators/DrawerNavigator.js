import React from 'react'
import {StyleSheet} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabNavigator from './BottomTabNavigator'
import AboutNavigator from './AboutNavigator'
import CreateNavigator from './CreateNavigator'
import {THEME} from '../../theme'
import {Ionicons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, }}>
      <Drawer.Screen
        name='Home'
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Главная',
          drawerLabelStyle: {fontFamily: 'openSans-bold', paddingLeft: 25},
          drawerContentStyle: {marginTop: 50},
          drawerItemStyle: { marginBottom: 15},
          // drawerStyle: {width: 200},
          // drawerIcon: () => <Ionicons name='ios-home' size={24}/>
          drawerActiveTintColor: THEME.MAIN_COLOR
        }}
      />
      <Drawer.Screen
        name='About'
        component={AboutNavigator}
        options={{
          drawerLabel: 'О приложении',
          drawerLabelStyle: {fontFamily: 'openSans-bold', paddingLeft: 25},
          drawerContentStyle: {marginTop: 50},
          drawerItemStyle: { marginBottom: 15 },
          // drawerIcon: () => <Ionicons name='ios-reader' size={24} />
          drawerActiveTintColor: THEME.MAIN_COLOR
        }}
      />
      <Drawer.Screen
        name='Create'
        component={CreateNavigator}
        options={{
          drawerLabel: 'Создать пост',
          drawerLabelStyle: {fontFamily: 'openSans-bold', paddingLeft: 25},
          drawerContentStyle: {marginTop: 50},
          // drawerIcon: () => <Ionicons name='ios-create' size={24}/>
          drawerActiveTintColor: THEME.MAIN_COLOR
        }}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
})

export default DrawerNavigator
