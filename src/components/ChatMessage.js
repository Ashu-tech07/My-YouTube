import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm rounded-lg text-sm py-2'>
      <img
          className="h-7"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
        <span className='font-bold mx-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
