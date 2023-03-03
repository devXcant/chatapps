import React from 'react'
import Av1 from '../img/av1.jpg'

const Register = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>DevX Chat Community</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder= "display name" name="" id="" />
          <input type="email" placeholder= "email"  name="" id="" />
          <input type="password" placeholder= "password"  name="" id="" />
          <input style={{display:"none"}} type="file" />
          <label htmlFor="file" id='file'>
            <img src={Av1} class="avatars" alt="avatar-main" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do not have an account? Login</p>
      </div>
    </div>
     
  )
}

export default Register