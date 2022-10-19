import * as ImagePicker from 'expo-image-picker'
import {useEffect, useRef, useState} from 'react'
import {View, StyleSheet, Image, Button, Alert, Platform} from 'react-native'
import {Camera} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

export const PhotoPicker = ({onPick}) => {
  // const cameraRef = useRef()
  // const [hasCameraPermission, setHasCameraPermission] = useState()
  // const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState()
  const [photo, setPhoto] = useState()

  //  async function askForPermission () {
  //   const cameraPermission = await Camera.getCameraPermissionsAsync()
  //   const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync()
  //   setHasCameraPermission(cameraPermission.status === 'granted')
  //   setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted')
  // }

  // const takePhoto = async () => {
  //   await askForPermission()
  //   if (!hasCameraPermission || !hasMediaLibraryPermission) {
  //     Alert.alert('Ошибка', 'Вы не предоставили разрешениe на создание фото')
  //     return
  //   }

  //   let options = {
  //     quality: 1,
  //     base64: true,
  //     exif: false
  //   }
  //   let newPhoto = cameraRef.current.takePictureAsync(options)
  //   setPhoto(newPhoto)
  // }

  async function askForPermission() {
    if (Platform.OS !== 'web') {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (permissionResult.granted === false) {
        Alert.alert('Ошибка', 'Вы не предоставили разрешениe на создание фото')
        return false
      }
      return true
    }
  }

  const takePhoto = async () => {
    const hasPermission = await askForPermission()
    if (!hasPermission) {
      return
    }
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9]
    })

    if (!result.cancelled) {
      setImage(result.uri)
      onPick(result.uri)
    }
  }

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const cameraPermissionResult =
      await ImagePicker.requestCameraPermissionsAsync()

    if (cameraPermissionResult.granted === false) {
      Alert.alert('Вы не предоставили этому приложению доступ к вашей камере.')
      return
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
      base64: true,
      exif: false
    })

    if (!result.cancelled) {
      setPhoto(result.uri)
      onPick(result.uri)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Button title='Сделать фото' onPress={openCamera} />
      {Image && <Image source={{uri: photo}} style={styles.image} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
