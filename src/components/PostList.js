import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Post from './Post'

const PostList = ({data, onOpen}) => {

  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noposts}>Постов не найдено.</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  noposts: {
    fontFamily: 'openSans-regular',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  }
})

export default PostList
