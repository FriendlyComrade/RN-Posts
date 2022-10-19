import * as FileSystem from 'expo-file-system'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {DB} from '../../db/database'

const initialState = {
  posts: [],
  postsLoading: true
}

export const loadPosts = createAsyncThunk(
  'postSlice/loadPosts',
  async function () {
    try {
      const posts = await DB.getPosts()
      // console.log( await DB.createPost({text: 'te', date: 'da', booked: 0, img: 'im'}))
      return posts
    } catch (e) {}
  }
)

export const addPost = createAsyncThunk(
  'postSlice/addPost',
  async function (post, {rejectWithValue}) {
    try {
      // const fileName = post.img.split('/').pop()
      // const newPath = FileSystem.documentDirectory() + fileName
      // await FileSystem.moveAsync({
      //   to: newPath,
      //   from: post.img
      // })
      // const newPost = {...post, img: newPath}
      const id = await DB.createPost(post)
      post.id = id
      return post
    } catch (e) {
      console.log('Error:', e)
    }
  }
)

export const toogleBooked = createAsyncThunk(
  'postSlice/toogleBooked',
  async function (post) {
    try {
      await DB.updatePost(post)
    } catch(e) {
      console.log('Error:', e)
    }
  }
)

export const removePost = createAsyncThunk(
  'postSlice/removePost',
  async function (id) {
    try {
      await DB.removePost(id)
    } catch(e) {
      console.log('Error', e)
    }
  }
)

const postSlice = createSlice({
  name: 'postSlice',
  initialState: initialState,
  // reducers: {
  //   loadAllPosts(state, action) {
  //     state.posts = action.payload
  //   },
  //   toogleBooked(state, action) {
  //     state.posts = state.posts.map(post => {
  //       if (post.id === action.payload) {
  //         post.booked = !post.booked
  //       }
  //       return post
  //     })
  //   },
  //   removePost(state, action) {
  //     state.posts = state.posts.filter(post => post.id !== action.payload)
  //   }
  // },
  extraReducers: {
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload
      state.loading = false
    },
    [addPost.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload)
    },
    [toogleBooked.fulfilled]: (state, action) => {
      state.posts = state.posts.map(post => {
        if (post.id === action.meta.arg.id) {
          post.booked = !post.booked
        }
        return post
      })
    },
    [removePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.meta.arg)
    }
  }
})

export default postSlice.reducer
// export const {} = postSlice.actions
