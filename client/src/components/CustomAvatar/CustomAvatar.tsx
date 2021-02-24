import React from 'react'

import { Avatar } from 'antd'
type PropsType = {
    avatar: string
}
export const CustomAvatar: React.FC<PropsType> = ({avatar}) => {
    return (
        <Avatar size={64} src={avatar} />
    )
}
