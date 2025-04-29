import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='main'>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li> <Link to={'/Product'}>Products</Link></li>
        <li><Link to={'/Cart'}>Cart</Link></li>
       <div className='d-flex justify-content-end gap-3'>
      <Link to={'/Login'}>  <button className='btn btn-danger'>Login</button></Link>
       <Link to={'/Signup'}> <button className='btn btn-success'>Sign up</button></Link>

        </div>
      </ul>
   
    </div>
  )
}
