import {Spin} from 'antd'
import React, {useEffect, useState} from 'react'
import {CustomList} from '../CustomList/CustomList'
import {PostForm} from '../PostForm/PostForm'
import {CustomModal} from '../CustomModal/CustomModal'
import {Button} from 'antd'
import {setIsCustomModalVisible} from '../../redux/authReducer'
import {useDispatch} from 'react-redux'
import '../CustomModal/CustomModal.css'
import {fetchPosts} from '../../redux/postReducer'


export const FloodPage = () => {
    const isFlood = true
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const showModal = () => {
        dispatch(setIsCustomModalVisible(true))
    }

    useEffect(() => {
        async function getPosts() {
            await dispatch(fetchPosts(isFlood))
        }
        setLoading(false)
        getPosts()
    }, [])

    return (

        <>
            {
                loading
                    ?
                        <Spin size="large" style={{margin: '0 auto'}}/>
                    :
                    <div>
                        <div className='buttonWrapper'>
                            <Button type="primary" onClick={showModal}>
                                + Add Message
                            </Button>
                        </div>

                        <br/>
                        <br/>
                        <CustomModal modalTitle={'Add Message'}>
                            <PostForm isFlood ={isFlood}/>
                        </CustomModal>
                        <CustomList/>
                    </div>
            }

        </>
    )
}