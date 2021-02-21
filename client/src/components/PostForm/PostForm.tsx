import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import {EmojiPicker} from '../EmojiPicker/EmojiPicker'
// const layout = {
//     labelCol: {
//         span: 8,
//     },
//     wrapperCol: {
//         span: 16,
//     },
// }
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
}
export const PostForm = () => {

    return (
        <Form  name="nest-messages"  validateMessages={validateMessages} layout="vertical">
            {/*<Form.Item*/}
            {/*    name={['user', 'name']}*/}
            {/*    label="Name"*/}
            {/*    rules={[*/}
            {/*        {*/}
            {/*            required: true,*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*>*/}
            {/*    <Input />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item*/}
            {/*    name={['user', 'email']}*/}
            {/*    label="Email"*/}
            {/*    rules={[*/}
            {/*        {*/}
            {/*            type: 'email',*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*>*/}
            {/*    <Input />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item*/}
            {/*    name={['user', 'age']}*/}
            {/*    label="Age"*/}
            {/*    rules={[*/}
            {/*        {*/}
            {/*            type: 'number',*/}
            {/*            min: 0,*/}
            {/*            max: 99,*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*>*/}
            {/*    <InputNumber />*/}
            {/*</Form.Item>*/}
            {/*<Form.Item name={['user', 'website']} label="Website">*/}
            {/*    <Input />*/}
            {/*</Form.Item>*/}
            <Form.Item
                name={['user', 'introduction']}
                label="Message"
                rules={[
                {
                    required: true
                },
            ]}>
                <Input.TextArea style={{height:200}}/>
            </Form.Item>
            <Form.Item >
                <EmojiPicker/>
            </Form.Item>
            <br/>
            <Form.Item >
                <div className="buttonWrapper">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </Form.Item>

        </Form>
    )
}






