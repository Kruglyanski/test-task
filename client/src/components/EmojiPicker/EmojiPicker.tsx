import React from 'react'
import Picker from 'emoji-picker-react'
type PropsType = {
    onEmojiClick: (emoji: any, emojiObject:any) => void
}
export const EmojiPicker:React.FC<PropsType> = ({onEmojiClick}) => {
    return (
        <div>
            <Picker
                disableAutoFocus={true}
                disableSearchBar={true}
                pickerStyle={{ width: '100%', height: '300px' }}
                onEmojiClick={onEmojiClick}
            />
        </div>
    )
}



