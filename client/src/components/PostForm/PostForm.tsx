import React, {useRef} from 'react'
import { Button} from 'antd'
import {EmojiPicker} from '../EmojiPicker/EmojiPicker'
import {useDispatch, useSelector} from 'react-redux'
import {currentPostChange, sendPost} from '../../redux/postReducer'
import {RootState} from '../../redux/rootReducer'

type PropsType = {

    isFlood: boolean
}
export const PostForm:React.FC<PropsType> = ({isFlood}) => {
    const dispatch = useDispatch()
    const text = useSelector((state:RootState) => state.post.text)
    const userName = useSelector((state:RootState) => state.auth.name)
    const avatar = useSelector((state:RootState) => state.auth.avatar)
    const ref = useRef(null)


    const onEmojiClick = (event:any, emojiObject:any) => {
        // @ts-ignore
        const cursor = ref.current.selectionStart
        const emoText = text.slice(0, cursor) + emojiObject.emoji + text.slice(cursor)
        dispatch(currentPostChange(emoText))
    }

    const postHandler = () => {
        const postData = {text: text, userName: userName, avatar: avatar, isFlood}
        dispatch(sendPost(postData))
    }

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(currentPostChange(event.currentTarget.value))
    }
    return (
        <>
            <textarea
                id="text"
                className="ant-input"
                ref={ref}
                onChange={changeHandler}
                value={text}
                style={{height: 200}}
            />

            {isFlood && <EmojiPicker onEmojiClick={onEmojiClick}/>}

            <br/>
            <br/>

            <div className="buttonWrapper">
                <Button type="primary" htmlType="submit" onClick={postHandler}>
                    Submit
                </Button>
            </div>

            </>
    )
}






