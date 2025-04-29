import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
      <h2 className='text-center head text-dark'>E-Commerce Website</h2>
      <div >
     <div className='form px-5'>
      <h3 className='text-center mt-3 p-3 mx-5 rounded-4 text-uppercase' style={{background:'#778da9',boxShadow:'8px 12px 8px #264653'}}>Login Page</h3>
      
      <form action="" className='text-center mt-3 aL'>
      <label htmlFor="User">Enter UserName/Email/Number</label><br />
      <input type="text" name="User" id="User" placeholder='Name/Email/Number' required/><br /><br />
      <label htmlFor="Pass">Password</label><br />
      <input type="password" name="Pass" id="Pass" placeholder='Password'required/> <br /><br />
      
      <Link className='text-center text-light link' id='link'>Forgot Password ?</Link>
      <br />
      <button className='btn btn-dark mt-3'>Login</button>
      </form><br />
      
      <p className='text-center'>If Don't Have Account <Link className='link ' to={'/Signup'}>Sign IN </Link></p>
    </div>
    
    </div>
    </div>
  )
}
