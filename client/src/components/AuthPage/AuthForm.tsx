import React from 'react'
import {Button, Form, Input} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {AuthFormType, setIsCustomModalVisible} from '../../redux/authReducer'
import {useDispatch} from 'react-redux'


type PropsType = {
    buttonName: string
    formTitle: string
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    form: AuthFormType
}
export const AuthForm: React.FC<PropsType> = ({buttonName, formTitle, changeHandler, form}) => {
    const dispatch = useDispatch()

    const showModal = () => {
        dispatch(setIsCustomModalVisible(true))
    }
    return (
        <div className="form-wrapper">

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
            >
                <div className='logo'/>
                <h2>{formTitle}</h2>
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        value={form.email}
                        name="email"
                        onChange={changeHandler}
                        placeholder="Username"
                    />

                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {buttonName}
                    </Button>
                    <br/>
                    Or <a  onClick={showModal}>register now!</a>
                </Form.Item>
            </Form>
        </div>

    )
}