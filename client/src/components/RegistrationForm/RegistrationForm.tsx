import React from 'react'
import {
    Form,
    Input,
    Tooltip,
    Button
} from 'antd'
import {QuestionCircleOutlined} from '@ant-design/icons'
import {FileUploader} from '../FileUploader/FileUploader'
import './RegistrationForm.css'

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
}
export const RegistrationForm = () => {
    const [form] = Form.useForm()

    return (

        <Form
            {...formItemLayout}
            form={form}
            name="register"

            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86'
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!'
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!'
                    }
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}
                hasFeedback
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!'
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }

                            return Promise.reject('The two passwords that you entered do not match!')
                        }
                    })
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="name"
                label={
                    <span>
            Name&nbsp;
                        <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined/>
            </Tooltip>
          </span>
                }
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                        whitespace: true
                    }
                ]}
            >
                <Input/>
            </Form.Item>
            <div className='uploadWrapper'>
                <FileUploader/>
            </div>

<br/>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{width: 150}} >
                    Register
                </Button>
            </Form.Item>
        </Form>
    )

}