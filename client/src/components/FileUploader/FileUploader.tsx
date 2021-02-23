import React from 'react'
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'


const props = {
    name: 'image',
    action: '/api/auth/upload',
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    },
}

export const FileUploader = () => {
    return (

        <Upload {...props}>
            <Button icon={<UploadOutlined />} >Upload Photo</Button>
        </Upload>

    )
}