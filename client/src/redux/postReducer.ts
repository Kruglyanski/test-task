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
    floodPosts: PostsArrayType
    corpPosts: PostsArrayType
    text: string
}




const initialState: StateType = {
    floodPosts: [],
    corpPosts: [],
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
// export const sendPost = createAsyncThunk(
//     'postReducer/sendPost',
//     async (post: { text: string, userName: string, avatar: string }) => {
//          const data = await api.sendPost(post).then((res) => res && res.json())
//         if (!data) {
//             throw new Error(data.message || 'Something went wrong!')
//         }
//         console.log('data', data)
//         return data
//     }
// )


const postReducer = createSlice({
    name: 'postReducer',
    initialState,
    reducers: {
        currentPostChange: (state, action) => {
            return {
                ...state,
                text: action.payload
            }
        }


    },
    extraReducers: {

        [fetchPosts.fulfilled.type]: (state, action) => {

            return {
                ...state,
                floodPosts: action.payload
            }

        },
        [sendPost.fulfilled.type]: (state, action) => {
            console.log('ap', action.payload)
            return {
                ...state,
                floodPosts: [
                    ...state.floodPosts,
                    action.payload
                ]
            }

        }


    }
})

export const {currentPostChange} = postReducer.actions

export default postReducer.reducer