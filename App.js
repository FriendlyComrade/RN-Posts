import {StyleSheet} from 'react-native'
import {useCallback, useEffect, useState} from 'react'
import {Provider} from 'react-redux'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {AppNavigation} from './src/navigation/AppNavigation'
import store from './src/store'
import { DB } from './src/db/database'
import { SafeAreaProvider } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'openSans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
          'openSans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        })
        await DB.init()
        console.log('DB started...')
      } catch (e) {
        console.warn(e)
      } finally {
        setIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync()
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  return (
    <Provider store={ store }>
      <SafeAreaProvider>
        <AppNavigation onReady={onLayoutRootView} />
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({})
