import React from 'react'
import {Modal} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/rootReducer'
import {setIsCustomModalVisible} from '../../redux/authReducer'

type PropType = {
    children: React.ReactNode
    modalTitle: string
}

export const CustomModal:React.FC<PropType>  = (props) => {
    const dispatch = useDispatch()
    const isModalVisible = useSelector((state: RootState) => state.auth.isModalVisible)


    const handleOk = () => {
       dispatch(setIsCustomModalVisible(false))
    }

    const handleCancel = () => {
        dispatch(setIsCustomModalVisible(false))
    }

    return (
        <>
            <Modal title={props.modalTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                {props.children}
            </Modal>
        </>
    )
}

