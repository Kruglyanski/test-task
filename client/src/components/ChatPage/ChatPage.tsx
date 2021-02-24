import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Spin, Button} from 'antd'
import {PostForm} from '../PostForm/PostForm'
import {CustomModal} from '../CustomModal/CustomModal'
import {CustomList} from '../CustomList/CustomList'
import {setIsCustomModalVisible} from '../../redux/authReducer'
import '../CustomModal/CustomModal.css'
import {fetchPosts} from '../../redux/postReducer'

type PropsType = {
    isFlood: boolean
}
export const ChatPage:React.FC<PropsType> = ({isFlood}) => {
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
    }, [isFlood])

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