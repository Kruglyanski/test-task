import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export type LoginFormType = {
    email: string
    password: string

}
export type RegistrationFormType = {
    email: string
    password: string
    name: string

}

const initialState = {
    isModalVisible: false,
    token: null,
    userId: null,
    error: null,
    isAuthenticated: false,
    isRegistered: false,
    loginForm: {
        email: '',
        password: ''
    },
    registrationForm: {
        email: '',
        password: '',
        name: ''
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
        loginFormChange: (state, action) => {
            return {
                ...state,
                loginForm: {...state.loginForm, ...action.payload}
            }
        },
        registrationFormChange: (state, action) => {
            return {
                ...state,
                registrationForm: {...state.registrationForm, ...action.payload}
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

export const {authLogout, loginFormChange, registrationFormChange, setIsAuthenticated, setIsCustomModalVisible} = authReducer.actions

export default authReducer.reducer