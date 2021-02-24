import {configureStore, combineReducers} from '@reduxjs/toolkit'

import authReducer from './authReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
     auth: authReducer,
     post: postReducer
})
export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({
    reducer: rootReducer

})
