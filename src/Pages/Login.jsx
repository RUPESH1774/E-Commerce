import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form refresh

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful!');
      navigate('/'); // redirect to home or dashboard
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2 className='text-center head text-dark'>E-Commerce Website</h2>
      <div className='form px-5'>
        <h3 className='text-center mt-3 p-3 mx-5 rounded-4 text-uppercase' 
            style={{background:'#778da9',boxShadow:'8px 12px 8px #264653'}}>
          Login Page
        </h3>

        <form className='text-center mt-3 aL' onSubmit={handleLogin}>
          <label htmlFor="User">Email</label><br />
          <input type="email" id="User" placeholder='Enter your email' value={email} 
                 onChange={(e) => setEmail(e.target.value)} required/><br /><br />
          
          <label htmlFor="Pass">Password</label><br />
          <input type="password" id="Pass" placeholder='Enter password' value={password} 
                 onChange={(e) => setPassword(e.target.value)} required/><br /><br />
          
          <Link className='text-center text-light link' id='link'>Forgot Password?</Link>
          <br />
          <button className='btn btn-dark mt-3' type="submit">Login</button>
        </form><br />

        <p className='text-center'>Don't have an account? 
          <Link className='link' to={'/Signup'}> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
