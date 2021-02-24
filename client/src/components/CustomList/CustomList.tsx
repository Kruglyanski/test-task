import React from 'react'
import {List, Avatar} from 'antd'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/rootReducer'


       // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',



export const CustomList = () => {
    const posts = useSelector((state: RootState) => state.post.posts)


    return (


        <List
            itemLayout="vertical"
            size="large"

            dataSource={posts.slice().reverse()}
            renderItem={item => (
                <List.Item
                    key={item._id}
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