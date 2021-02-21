import axios from 'axios'
import {RegistrationFormType} from '../redux/authReducer'


export const api = {
    register(registrationForm: RegistrationFormType) {
        console.log('rf',registrationForm)
        return fetch('/api/auth/register',{
            method:'POST',
        body: JSON.stringify({
        ...registrationForm
    })
        }).then(function (response) {
                console.log(response)
                return response
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    // fetchVideosBySavedQuery(max, sort, currentQuery) {
    //     return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${currentQuery}&maxResults=${max}&type=video&videoType=${sort}&key=AIzaSyDYHTm0YMsvO258SlFP22RFzF-WbAVR1Fo`).then(response => {
    //         return response.data
    //     })
    // }
}