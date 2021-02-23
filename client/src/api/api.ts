import axios from 'axios'
import {LoginFormType, RegistrationFormType} from '../redux/authReducer'


export const api = {
    register(registrationForm: RegistrationFormType) {

        return fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationForm)
        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    },
    // upload(data: any) {
    //
    //     return fetch('/api/auth/upload', {
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //     }).then(function (response) {
    //         console.log(response)
    //         return response
    //     })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // },

    login(loginForm: LoginFormType) {

        return fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...loginForm
            })
        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    }


}