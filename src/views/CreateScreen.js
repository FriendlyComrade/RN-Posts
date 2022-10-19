import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {PhotoPicker} from '../components/PhotoPicker'
import { addPost } from '../store/slices/postSlice'
import {THEME} from '../theme'

const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [photo, setPhoto] = useState(null)

  const saveHandler = () => {
    const post = {
      // id: Date.now().toString(),
      date: new Date().toJSON(),
      text: text,
      img: photo,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('MainScreen')
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Создать пост',
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

  const photoPickHandler = uri => {
    setPhoto(uri)
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder='Введите текст поста'
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler}/>
          <Button
            title='Создать пост'
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text || !photo}
          />
      </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontFamily: 'openSans-regular',
    textAlign: 'center',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 10
  }
})

export default CreateScreen
