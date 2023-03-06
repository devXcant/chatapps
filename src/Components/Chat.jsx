import React from 'react'
import Cam from '../img/camera.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Inputs from './Inputs'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>Nneji</span>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages />
        <Inputs />
    </div>
  )
}

export default Chat