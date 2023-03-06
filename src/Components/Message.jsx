import React from 'react'
import Av1 from '../img/av1.jpg'

const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img src={Av1} alt="" />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  )
}

export default Message