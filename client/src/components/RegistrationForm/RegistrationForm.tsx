import React, {useEffect, useState} from 'react'
import {
    Form,
    Input,
    Tooltip,
    Button
} from 'antd'
import {QuestionCircleOutlined} from '@ant-design/icons'
import './RegistrationForm.css'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/rootReducer'
import {authRegister, registrationFormChange, setIsCustomModalVisible, setIsMessageShow, setIsRegistered} from '../../redux/authReducer'


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
    const [CustomForm] = Form.useForm()
    const dispatch = useDispatch()
    const registrationForm = useSelector((state: RootState) => state.auth.registrationForm)
    const isRegistered = useSelector((state: RootState) => state.auth.isRegistered)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(registrationFormChange({[event.target.name]: event.target.value}))
    }
    const registerHandler = async () => {
        await dispatch(authRegister(registrationForm))

        dispatch(setIsMessageShow(true))


    }
    useEffect(() => {
        isRegistered
        && dispatch(setIsCustomModalVisible(false))

    }, [isRegistered])


    // const fileHandler = (e: any) => {
    //
    //     dispatch(authUpload(e.currentTarget.files[0]))
    //
    //
    // }
    return (
        <>
            <Form

                {...formItemLayout}
                form={CustomForm}
                name="register"
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
                    <Input
                        name="email"
                        value={registrationForm.email}
                        onChange={changeHandler}
                    />
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
                    <Input.Password
                        name="password"
                        value={registrationForm.password}
                        onChange={changeHandler}
                    />
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
                    <Input
                        name="name"
                        value={registrationForm.name}
                        onChange={changeHandler}
                    />
                </Form.Item>
                {/*<div className='uploadWrapper'>*/}
                {/*    <FileUploader/>*/}

                {/*</div>*/}
                <br/>
                <Form.Item {...tailFormItemLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{width: 150}}
                        onClick={registerHandler}
                    >
                        Register
                    </Button>
                </Form.Item>


            </Form>

        </>
    )

}