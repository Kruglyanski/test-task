import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from '../api/api'
export type PostsArrayType = Array<PostType>
export type PostType = {
    _id: string
    text: string
    userName: string
    avatar: string
    date: string
    __v: number
}

type StateType = {
    posts: PostsArrayType
    text: string
}


const initialState: StateType = {
    posts: [],
    text: ''
}


export const fetchPosts = createAsyncThunk(
    'postReducer/fetchPosts ',
    async (isFlood: boolean) => {

        const data = await api.fetchPosts(isFlood)
            .then((res) => res && res.json())

        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data

    }
)

export const sendPost = createAsyncThunk(
    'postReducer/sendPost',
    async (postData:{text: string, userName: string, avatar: string}) => {
        const data = await api.sendPost(postData)
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }
        return data
    }
)
export const deletePost = createAsyncThunk(
    'postReducer/deletePost',
    async (id: number) => {
         await api.deletePost(id)
        return id
    }
)



const postReducer = createSlice({
    name: 'postReducer',
    initialState,
    reducers: {
        currentPostChange: (state, action) => {
            return {
                ...state,
                text: action.payload
            }
        },
        clearInput: (state) => {
            return {
                ...state,
                text: ''
            }
        }


    },
    extraReducers: {

        [fetchPosts.fulfilled.type]: (state, action) => {

            return {
                ...state,
                posts: action.payload
            }

        },
        [deletePost.fulfilled.type]: (state, action) => {

            return {
                ...state,
                posts: [...state.posts.filter(i=>i._id !== String(action.payload))]

            }

        },
        [sendPost.fulfilled.type]: (state, action) => {

            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }

        }


    }
})

export const {currentPostChange, clearInput} = postReducer.actions

export default postReducer.reducer