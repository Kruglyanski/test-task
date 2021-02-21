import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export type AuthFormType = {
    email: string
    password: string

}

const initialState = {
    isModalVisible: false,
    token: null,
    userId: null,
    error: null,
    isAuthenticated: true,
    isRegistered: false,
    form: {
        email: '', password: ''
    }
}


// export const authLogin = createAsyncThunk(
//     'authReducer/authLogin ',
//     // async ({email: string, password: string}) => {
//     //      const data =  "db"
//
//     // }
// )


const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        formChange: (state, action) => {
            return {
                ...state,
                form: {...state.form, ...action.payload}
            }
        },
        setIsAuthenticated: (state, action) => {
            return {
                ...state,
                isAuthenticated: action.payload
            }
        },
        setIsCustomModalVisible: (state, action) => {
            return {
                ...state,
                isModalVisible: action.payload
            }
        },

        authLogout: (state, action) => {
            return {
                ...state,
                token: null,
                userId: null,
                isAuthenticated: false
            }
        },

    },
    extraReducers: builder => {
        // builder.addCase(authLogin.fulfilled, (state, action) => {
        //         return {
        //             ...state,
        //             token: action.payload.token,
        //             userId: action.payload.id,
        //             error: action.payload.error,
        //             isAuthenticated: !!action.payload.token,
        //
        //         }
        //
        //     }
        // ).addCase(authLogin.rejected, (state, action) => {
        //             return {
        //                 ...state,
        //                 error: 'Введены неправильные данные',
        //                 isAlertShow: true
        //             }
        //
        //         }
        //     )
    }
})

export const {authLogout, formChange, setIsAuthenticated, setIsCustomModalVisible} = authReducer.actions

export default authReducer.reducer