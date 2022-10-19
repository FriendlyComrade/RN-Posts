import React, {useEffect, useState} from 'react'
import {StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import PostList from '../components/PostList'

const BookedScreen = ({navigation}) => {
  const posts = useSelector(state => state.posts.posts)
  const bookedPosts = posts.filter(post => post.booked)
  
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Избранное',
      headerTitleStyle: { color: '#fff' },
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            style={{paddingLeft: 16}}
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
      date: post.date,
      booked: post.booked
    })
  }

  return <PostList data={bookedPosts} onOpen={openPostHandler} />
}

const styles = StyleSheet.create({})

export default BookedScreen
