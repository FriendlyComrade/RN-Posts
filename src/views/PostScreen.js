import React, {useCallback, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useDispatch, useSelector} from 'react-redux'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {THEME} from '../theme'
import { toogleBooked, removePost } from '../store/slices/postSlice'

const PostScreen = ({route, navigation}) => {
  const dispatch = useDispatch()
  const {postId, date} = route.params
  const {posts} = useSelector(state => state.posts)
  const post = posts.find(post => post.id === postId)
  const booked = post ? post.booked : null 

  const toogleHandler = useCallback(() => {
    dispatch(toogleBooked(post))
  }, [dispatch, post])

  useEffect(() => {
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    navigation.setOptions({
      headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toogle booked'
            iconName={iconName}
            onPress={toogleHandler}
          />
        </HeaderButtons>
      )
    })
  }, [navigation, booked])

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            dispatch(removePost(postId))
            navigation.navigate('MainScreen')
          }
        }
      ],
      {cancelable: false}
    )
  }

  if (!post) {
    return null
  }

  return (
    <ScrollView style={styles.center}>
      <Image source={{uri: post.img}} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title='Удалить'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      ></Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'openSans-regular'
  }
})

export default PostScreen
