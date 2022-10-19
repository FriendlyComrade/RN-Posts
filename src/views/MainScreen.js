import React, {useEffect} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import PostList from '../components/PostList'
import { loadPosts } from '../store/slices/postSlice'
import { THEME } from '../theme'

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)
  const loading = useSelector(state => state.posts.loading)

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Главная',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Take photo'
            iconName='ios-camera'
            onPress={() => navigation.navigate('Create')}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle drawer'
            iconName='ios-menu'
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      )
    })
  }, [navigation])

  const openPostHandler = post => {
    navigation.navigate('PostScreen', {
      postId: post.id,
      date: post.date
    })
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR}/>
      </View>
    )
  }

  return <PostList data={posts} onOpen={openPostHandler} />
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MainScreen
