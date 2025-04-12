import React from 'react'
import LoginAndSignupForm from './LoginAndSignupForm';

function Register() {
  return (
    <div className='LoginSingupMainCon'>
      <LoginAndSignupForm isSignupPage={true} />
    </div>
  )
}

export default Register;
