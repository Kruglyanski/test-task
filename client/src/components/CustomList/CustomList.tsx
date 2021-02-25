import React from 'react'
import {List, Avatar} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/rootReducer'
import {DeleteOutlined} from '@ant-design/icons'
import {deletePost} from '../../redux/postReducer'
export const CustomList = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.post.posts)


const deleteHandler = (event: any) => {

    dispatch(deletePost(event.currentTarget.id))
console.log(event.currentTarget.id)
}
    return (

        <List
            itemLayout="vertical"
            size="large"

            dataSource={posts.slice().reverse()}
            renderItem={item => (
                <List.Item
                    id={item._id}
                    key={item._id}
                    extra={
                        <DeleteOutlined id={item._id} onClick={deleteHandler}/>
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar size={'large'} src={item.avatar}/>}
                        title={item.userName}

                    />
                    {item.text}
                </List.Item>
           )}
        />
    )
}