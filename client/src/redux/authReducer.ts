import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from '../api/api'

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
    authError: '',
    isAuthenticated: false,
    isRegistered: false,
    registerMessage: '',
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


export const authLogin = createAsyncThunk(
    'authReducer/authLogin ',
    async (loginForm: LoginFormType) => {

            const data = await api.login(loginForm)
                .then((res) => res && res.json())

            if (!data.token) {
                throw new Error(data.message || 'Something went wrong!')
            }
            return data

    }
)
export const authRegister = createAsyncThunk(
    'authReducer/authRegister ',
    async (registrationForm: RegistrationFormType) => {
        return await api.register(registrationForm)
            .then((res) => res && res.json())
    }
)


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

        authLogout: (state) => {
            return {
                ...state,
                token: null,
                userId: null,
                isAuthenticated: false
            }
        }

    },
    extraReducers: {

        [authRegister.fulfilled.type]: (state, action) => {

            return {
                ...state,
                registerMessage: action.payload.message

            }

        },
        [authRegister.rejected.type]: (state, action) => {

            return {
                ...state,
                registerMessage: action.error.message

            }

        },
        [authLogin.fulfilled.type]: (state, action) => {

            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                isAuthenticated: !!action.payload.token,

            }

        },

        [authLogin.rejected.type]: (state, action) => {
            return {
                ...state,
                authError: action.error.message

            }

        }

    }
})

export const {authLogout, loginFormChange, registrationFormChange, setIsAuthenticated, setIsCustomModalVisible} = authReducer.actions

export default authReducer.reducer