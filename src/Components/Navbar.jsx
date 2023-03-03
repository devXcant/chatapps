import React from 'react'
import Av2 from '../img/av2.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">DevX Chat</span>
      <div className="user">
        <img src={Av2} alt="avatar-2" />
        <span>CantPlay</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar