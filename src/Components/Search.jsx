import React from 'react'
import Av3 from '../img/av3.png'

const Search = () => {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="text" placeholder='Find user' />
      </div>
      <div className="user-chat">
        <img src={Av3} alt="" />
        <div className="user-chat-info">
          <span>Nneji</span>
        </div>
      </div>
    </div>
  )
}

export default Search