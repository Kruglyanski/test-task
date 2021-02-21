import React from 'react'
import './AuthPage.css'
import {AuthForm} from './AuthForm'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import {formChange} from '../../redux/authReducer'
import {CustomModal} from '../CustomModal/CustomModal'
import {RegistrationForm} from '../RegistrationForm/RegistrationForm'
export const AuthPage = () => {

    const dispatch = useDispatch()
    const isRegistered = useSelector((state: RootState) => state.auth.isRegistered)
    const form = useSelector((state: RootState) => state.auth.form)

    //const localStorageAuthData = JSON.parse(localStorage.getItem('userData'))

    // useEffect(() => {
    //     localStorageAuthData && dispatch(setIsAuthenticated(jwt.verify(localStorageAuthData.token, 'jwtSecret')))
    // }, [])

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formChange({[event.target.name]: event.target.value}))
    }

    // const loginHandler = () => {
    //     dispatch(authLogin(form))
    // }

    return (
        <>
            <CustomModal modalTitle={'Registration'}>
                <RegistrationForm/>
            </CustomModal>
            <AuthForm form={form} changeHandler={changeHandler} buttonName={'Log In'} formTitle={'Planktonics Social Network'}/>
            {/*{*/}
            {/*    isRegistered*/}
            {/*        ?*/}
            {/*        <AuthForm form={form} changeHandler={changeHandler} buttonName={'Log In'} formTitle={'Planktonics Social Network'}/>*/}
            {/*        :*/}
            {/*        <AuthForm form={form} changeHandler={changeHandler} buttonName={'Register'} formTitle={'Planktonics: registration'}/>*/}
            {/*}*/}
        </>
    )
}