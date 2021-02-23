import React, {useEffect} from 'react'
import './AuthPage.css'
import {message, Space} from 'antd'
import {AuthForm} from './AuthForm'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/rootReducer'
import {CustomModal} from '../CustomModal/CustomModal'
import {setIsMessageShow} from '../../redux/authReducer'
import {RegistrationForm} from '../RegistrationForm/RegistrationForm'

export const AuthPage = () => {

    const dispatch = useDispatch()
    const isRegistered = useSelector((state: RootState) => state.auth.isRegistered)
    const isMessageShow = useSelector((state: RootState) => state.auth.isMessageShow)
    const registerMessage = useSelector((state: RootState) => state.auth.registerMessage)
    const authError = useSelector((state: RootState) => state.auth.authError)


    //const localStorageAuthData = JSON.parse(localStorage.getItem('userData'))

    // useEffect(() => {
    //     localStorageAuthData && dispatch(setIsAuthenticated(jwt.verify(localStorageAuthData.token, 'jwtSecret')))
    // }, [])


    // const loginHandler = () => {
    //     dispatch(authLogin(form))
    // }

    return (
        <>
            {
                isMessageShow
                    ?
                    <Space>
                        {
                            authError
                                ?
                                message.error(authError)
                                :

                                isRegistered
                                    ?
                                    message.success(registerMessage)
                                    :
                                    message.error(registerMessage)
                        }


                    </Space>
                    :
                    null
            }

            <CustomModal modalTitle={'Registration'}>
                <RegistrationForm/>
            </CustomModal>
            <AuthForm/>
        </>
    )
}