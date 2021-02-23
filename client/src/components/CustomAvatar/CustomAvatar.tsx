import { Avatar } from 'antd'

import React from 'react'
type PropsType = {
    avatar: string
}
export const CustomAvatar: React.FC<PropsType> = ({avatar}) => {
    return (
        <Avatar size={64} src={avatar} />
    )
}
