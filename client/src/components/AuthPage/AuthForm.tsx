import React from 'react'
import {Button, Form, Input} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {loginFormChange, setIsCustomModalVisible} from '../../redux/authReducer'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/rootReducer'


export const AuthForm: React.FC = () => {
    const dispatch = useDispatch()
    const loginForm = useSelector((state: RootState) => state.auth.loginForm)

    const showModal = () => {
        dispatch(setIsCustomModalVisible(true))
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginFormChange({[event.target.name]: event.target.value}))
    }
    const loginHandler = () => {

    }

    return (
        <div className="form-wrapper">

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
            >
                <div className='logo'/>
                <h2>Planktonics Social Network</h2>
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        value={loginForm.email}
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

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    onClick={loginHandler}
                    >
                        Log In
                    </Button>
                    <br/>
                    Or <a  onClick={showModal}>register now!</a>
                </Form.Item>
            </Form>
        </div>

    )
}