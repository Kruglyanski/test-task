import React from 'react'
import {List, Avatar, Space} from 'antd'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/rootReducer'


       // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',



export const CustomList = () => {
    const floodPosts = useSelector((state: RootState) => state.post.floodPosts)
    console.log("fl", floodPosts)
    return (


        <List
            itemLayout="vertical"
            size="large"

            dataSource={floodPosts}
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