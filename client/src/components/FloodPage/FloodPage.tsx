import React from 'react'
import {CustomList} from '../CustomList/CustomList'
import {PostForm} from '../PostForm/PostForm'
import {CustomModal} from '../CustomModal/CustomModal'
import {Button} from 'antd'
import {setIsCustomModalVisible} from '../../redux/authReducer'
import {useDispatch} from 'react-redux'
import '../CustomModal/CustomModal.css'

export const FloodPage = () => {
    const dispatch = useDispatch()
    const showModal = () => {
        dispatch(setIsCustomModalVisible(true))
    }
    return (
        <div>
            <div className='buttonWrapper'>
                <Button type="primary" onClick={showModal}>
                    Add Message
                </Button>
            </div>

            <br/>
            <br/>
            <CustomModal modalTitle={'Add Message'}>
                <PostForm/>
            </CustomModal>

            <CustomList/>
        </div>
    )
}