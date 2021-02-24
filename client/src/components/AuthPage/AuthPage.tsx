import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './AuthPage.css'
import {message, Space} from 'antd'
import {setIsAuthenticated} from '../../redux/authReducer'
import {AuthForm} from './AuthForm'
import {RootState} from '../../redux/rootReducer'
import {CustomModal} from '../CustomModal/CustomModal'
import {RegistrationForm} from '../RegistrationForm/RegistrationForm'

export const AuthPage = () => {

    const dispatch = useDispatch()
    const isRegistered = useSelector((state: RootState) => state.auth.isRegistered)
    const isMessageShow = useSelector((state: RootState) => state.auth.isMessageShow)
    const registerMessage = useSelector((state: RootState) => state.auth.registerMessage)
    const authError = useSelector((state: RootState) => state.auth.authError)

    useEffect(() => {
        const localStorageAuthData = JSON.parse(localStorage.getItem('userData') as string)
        localStorageAuthData && dispatch(setIsAuthenticated(localStorageAuthData))
    }, [])

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