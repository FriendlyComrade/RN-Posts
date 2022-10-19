import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {StyleSheet} from 'react-native'
import { THEME } from '../../theme'
import MainScreen from '../../views/MainScreen'
import PostScreen from '../../views/PostScreen'
import {HeaderTabNavigationOptions} from '../options/HeaderTabNavigation'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='MainScreen'
      screenOptions={HeaderTabNavigationOptions}
    >
      <Stack.Screen name='MainScreen' component={MainScreen} />
      <Stack.Screen name='PostScreen' component={PostScreen} />
      {/* <Stack.Screen
        name='Create'
        component={CreateNavigator}
        options={{
          drawerLabel: 'Создать пост',
          drawerLabelStyle: {fontFamily: 'openSans-bold'},
          // drawerIcon: () => <Ionicons name='ios-create' size={24}/>
          drawerActiveTintColor: THEME.MAIN_COLOR
        }}
      /> */}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
export default StackNavigator
