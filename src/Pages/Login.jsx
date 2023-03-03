import React from 'react'


const Login = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>DevX Chat Community</span>
        <span className='title'>Login</span>
        <form>
          <input type="email" placeholder= "email"  name="" id="" />
          <input type="password" placeholder= "password"  name="" id="" />
          <button>Sign in</button>
        </form>
        <p>You do not have an account? Register</p>
      </div>
    </div>
     
  )
}

export default Login