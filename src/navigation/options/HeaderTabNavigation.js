import {Platform} from 'react-native'
import {THEME} from '../../theme'

export const HeaderTabNavigationOptions = {
  headerTitleStyle: {
    color: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
  }
}
