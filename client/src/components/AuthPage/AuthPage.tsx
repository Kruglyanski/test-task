import React from 'react'
import './AuthPage.css'
import {AuthForm} from './AuthForm'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import {CustomModal} from '../CustomModal/CustomModal'
import {RegistrationForm} from '../RegistrationForm/RegistrationForm'
export const AuthPage = () => {

    const dispatch = useDispatch()
    const isRegistered = useSelector((state: RootState) => state.auth.isRegistered)

    //const localStorageAuthData = JSON.parse(localStorage.getItem('userData'))

    // useEffect(() => {
    //     localStorageAuthData && dispatch(setIsAuthenticated(jwt.verify(localStorageAuthData.token, 'jwtSecret')))
    // }, [])



    // const loginHandler = () => {
    //     dispatch(authLogin(form))
    // }

    return (
        <>
            <CustomModal modalTitle={'Registration'}>
                <RegistrationForm/>
            </CustomModal>
            <AuthForm/>
        </>
    )
}