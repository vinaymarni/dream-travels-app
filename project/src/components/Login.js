import React from 'react'
import LoginAndSignupForm from './LoginAndSignupForm'

function Login() {
  return (
    <div className='LoginSingupMainCon'>
      <LoginAndSignupForm isSignupPage={false} />
    </div>
  )
}

export default Login
