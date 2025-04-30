import React, { useState } from 'react';
import './Sign.css';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
  const navi = useNavigate();

  const [form, setForm] = useState({
    FName: '', LName: '',
    Email: '', Number: '',
    Password: '', RePassword: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { FName, LName, Email, Number, Password, RePassword } = form;

    if (!FName || !LName || !Email || !Number || !Password || !RePassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (Password !== RePassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
      alert('Account Created Successfully');
      navi('/'); // redirect to homepage or login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2 className='text-center head text-dark'>E-Commerce Website</h2>
      <div className='all m-3 rounded-4' style={{boxShadow:'10px 11px 20px'}}>
        <h3 className='text-center text-uppercase mx-5 rounded-4 heading'>SignUp</h3><br />
        <img className='img-fluid float-xl-end'
             style={{height:'60vh', boxShadow:'15px 12px 12px', borderRadius:'30px 21px'}}
             src="https://wallpaperaccess.com/full/2593066.jpg"
             alt="signup-img" />

        <form onSubmit={handleSubmit} className='text-center mt-2'>

          <div className='d-flex justify-content-center gap-3 text-center'>
            <div>
              <label htmlFor="FName">First Name</label><br />
              <input type="text" name="FName" id="FName"
                     value={form.FName} onChange={handleChange}
                     placeholder='First Name' required />
            </div>

            <div>
              <label htmlFor="LName">Last Name</label><br />
              <input type="text" name="LName" id="LName"
                     value={form.LName} onChange={handleChange}
                     placeholder='Last Name' required />
            </div>
          </div><br />

          <label htmlFor="Email">Email</label>&nbsp;&nbsp;
          <input type="email" name="Email" id="Email"
                 value={form.Email} onChange={handleChange}
                 placeholder='Email' required /><br /><br />

          <label htmlFor="Number">Phone Number</label>&nbsp;&nbsp;
          <input type="tel" name="Number" id="Number"
                 value={form.Number} onChange={handleChange}
                 placeholder='Phone' required /><br /><br />

          <label htmlFor="Password">Enter Password</label>&nbsp;&nbsp;
          <input type="password" name="Password" id="Password"
                 value={form.Password} onChange={handleChange}
                 placeholder='Password' required /><br /><br />

          <label htmlFor="RePassword">Re-Enter Password</label>&nbsp;&nbsp;
          <input type="password" name="RePassword" id="RePassword"
                 value={form.RePassword} onChange={handleChange}
                 placeholder='Re-Password' required /><br /><br />

          <div className='login'>
            <img className='img-fluid m-2 p-2'
                 style={{height:'6vh', border:'2px solid black', borderRadius:'50px'}}
                 src="https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png"
                 alt="" title='Google' />
            <img className='img-fluid m-2 p-2'
                 style={{height:'6vh', border:'2px solid black', borderRadius:'50px'}}
                 src="https://logolook.net/wp-content/uploads/2021/06/Gmail-Logo.png"
                 alt="" title='Email'/>
          </div>

          <button type="submit" className='btn btn-outline-dark' style={{boxShadow: '8px 10px 12px'}}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
