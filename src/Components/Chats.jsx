import React from 'react'
import Av3 from '../img/av3.png'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="user-chat">
        <img src={Av3} alt="" />
        <div className="user-chat-info">
          <span>Nneji</span>
          <p>Hello</p>
        </div>
        </div>
        <div className="user-chat">
        <img src={Av3} alt="" />
        <div className="user-chat-info">
          <span>Nneja</span>
          <p>Hello</p>
        </div>
        </div>
        <div className="user-chat">
        <img src={Av3} alt="" />
        <div className="user-chat-info">
          <span>Nneji</span>
          <p>Hello</p>
        </div>
        </div>
    </div>
  )
}

export default Chats