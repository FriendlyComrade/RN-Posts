import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './navigators/DrawerNavigator'

export const AppNavigation = ({onReady}) => {
  return (
    <NavigationContainer onReady={onReady}>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
