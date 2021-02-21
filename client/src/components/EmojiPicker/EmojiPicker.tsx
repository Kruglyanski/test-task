import React, { useState } from 'react'
import Picker from 'emoji-picker-react'

export const EmojiPicker = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null)

    const onEmojiClick = (event:any, emojiObject:any) => {
        setChosenEmoji(emojiObject)
    }


    return (
        <div>
            {chosenEmoji ? (// @ts-ignore
                <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker disableAutoFocus={true} disableSearchBar={true} pickerStyle={{ width: '100%', height: '300px' }} onEmojiClick={onEmojiClick} />
        </div>
    )
}



