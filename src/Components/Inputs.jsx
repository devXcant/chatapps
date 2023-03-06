import React from 'react'
import attach from '../img/attach.png'
import addImage from '../img/addImage.png'

const Inputs = () => {
  return (
    <div className='inputs'>
      <input type="text" placeholder='Type Something' />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:'none'}}  id='file'/>
        <label htmlFor="file">
          <img src={addImage} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Inputs